from django.views.generic import TemplateView, DetailView, ListView
from base.models import *


class IndexView(ListView):
    model = Product
    template_name = 'index.html'
    context_object_name = 'products'

    def get_queryset(self):
        return self.model.objects.all().order_by('-num_of_views')[:5] or \
               self.model.objects.all().order_by('-num_of_views')


class AboutPageView(DetailView):
    model = AboutPageText
    template_name = 'about.html'

    def get_object(self, queryset=None):
        return self.model.objects.all()[0]


class ContactsPageView(DetailView):
    model = ContactsPageText
    template_name = 'contacts.html'

    def get_object(self, queryset=None):
        return self.model.objects.all()[0]


class CategoryView(ListView):
    model = ProductType
    template_name = 'categories.html'
    context_object_name = 'categories'


class ProductView(ListView):
    model = ProductType
    template_name = 'product.html'
    context_object_name = 'categories'

    def dispatch(self, request, *args, **kwargs):
        obj = Product.objects.get(pk=kwargs['pk'])
        obj.num_of_views += 1
        obj.save()
        return super(ProductView, self).dispatch(request, *args, **kwargs)

    def get_context_data(self, *args, **kwargs):
        ctx = super(ProductView, self).get_context_data()
        product_id = self.kwargs.get('pk')
        ctx['current_product'] = Product.objects.get(id=product_id)
        ctx['current_category'] = ctx['current_product'].product_type
        return ctx

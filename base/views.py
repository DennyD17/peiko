from django.views.generic import TemplateView
from django.db.models import F

from rest_framework import viewsets, mixins, generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from base.serializers import ProductSerializer
from base.models import Product


class IndexView(TemplateView):
    template_name = 'index.html'


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def retrieve(self, request, *args, **kwargs):
        Product.objects.filter(pk=kwargs['pk']).update(num_of_views=F('num_of_views') + 1)
        return super(ProductViewSet, self).retrieve(request, *args, **kwargs)


class TopSixProductsView(generics.ListAPIView):
    serializer_class = ProductSerializer
    model = serializer_class.Meta.model

    def get_queryset(self):
        return Product.objects.all().order_by('-num_of_views')[:6] if Product.objects.all().count() >= 6 \
            else Product.objects.all().order_by('-num_of_views')



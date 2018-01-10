from django.views.generic import TemplateView
from django.db.models import F

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.decorators import list_route
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView

from base.serializers import *
from base.models import Product


class IndexView(TemplateView):
    template_name = 'index.html'


class ProductViewSet(viewsets.ModelViewSet):
    """
    GET products/ to get list of all products
    GET products/id to get detail information about product with id
    GET products/top_viewed to get list of six top vied products from all products in all categories
    """
    queryset = Product.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def retrieve(self, request, *args, **kwargs):
        """
         :return: detail information about product
        """
        Product.objects.filter(pk=kwargs['pk']).update(num_of_views=F('num_of_views') + 1)
        return super(ProductViewSet, self).retrieve(request, *args, **kwargs)

    @list_route(methods=['GET'])
    def top_viewed(self, *args, **kwargs):
        """
        :return: list of six top vied products from all products in all categories
        """
        top_products = Product.objects.all().order_by('-num_of_views')[:6] if Product.objects.all().count() >= 6 \
            else Product.objects.all().order_by('-num_of_views')
        serializer = self.get_serializer(top_products, many=True)
        return Response(serializer.data)

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer
        if self.action == 'retrieve':
            return ProductDetailSerializer
        return ProductListSerializer


class AboutPageTextViewSet(viewsets.ModelViewSet):
    """
    One item in array, that contains text from page About.
    """
    queryset = AboutPageText.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = AboutTextSerializer


class ContactsPageTextViewSet(viewsets.ModelViewSet):
    """
        One item in array, that contains text from page Contacts.
    """
    queryset = ContactsPageText.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = ContactsTextSerializer




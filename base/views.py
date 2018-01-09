from django.views.generic import ListView
from base.models import Product
from rest_framework import viewsets, mixins
from base.serializers import ProductSerializer
import random


class IndexView(ListView):
    model = Product
    context_object_name = 'products'
    template_name = 'index.html'

    def get_queryset(self):
        ids = Product.objects.all().values_list('id', flat=True)
        if len(ids) > 6:
            rand_ids = random.sample(set(ids), 6)
            return Product.objects.filter(id__in=rand_ids)
        else:
            return Product.objects.all()


class ProductViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


from rest_framework import serializers
from base.models import *


class ProductDetailSerializer(serializers.HyperlinkedModelSerializer):
    product_type = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    product_type_name = serializers.CharField(source='product_type.name', read_only=True)

    class Meta:
        model = Product
        fields = '__all__'


class ProductListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'img_url']


class AboutTextSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AboutPageText
        fields = '__all__'


class ContactsTextSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ContactsPageText
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductType
        fields = ['id', 'name', 'description', 'image', 'products']
        depth = 1

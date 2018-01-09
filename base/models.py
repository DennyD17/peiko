from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class ProductType(models.Model):
    name = models.CharField(max_length=70, verbose_name='Наименование типа')

    class Meta:
        verbose_name = 'Тип продукта'
        verbose_name_plural = 'Типы продуктов'

    def __str__(self):
        return self.name


class Product(models.Model):
    product_type = models.ForeignKey(ProductType, on_delete=models.CASCADE, verbose_name='Тип продукта')
    name = models.CharField(max_length=100, verbose_name='Наименование')
    description = RichTextUploadingField(verbose_name='Описание', )
    image = models.ImageField(upload_to='images', verbose_name='Картинка', blank=True)
    num_of_views = models.IntegerField(default=0, verbose_name='Количество просмотров')

    @property
    def short_description(self):
        if len(self.description) > 15:
            return self.description[0:15] + ' ...'
        else:
            return self.description

    @property
    def img_url(self):
        return self.image.url

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    def __str__(self):
        return self.name

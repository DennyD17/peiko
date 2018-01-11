from django.db import models
from django.core.exceptions import ValidationError

from ckeditor_uploader.fields import RichTextUploadingField


class ProductType(models.Model):
    name = models.CharField(max_length=70, verbose_name='Наименование типа')

    class Meta:
        verbose_name = 'Тип продукта'
        verbose_name_plural = 'Типы продуктов'

    def __str__(self):
        return self.name


class Product(models.Model):
    product_type = models.ForeignKey(ProductType, on_delete=models.CASCADE, verbose_name='Тип продукта',
                                     related_name='products')
    name = models.CharField(max_length=100, verbose_name='Наименование')
    description = RichTextUploadingField(verbose_name='Описание', )
    image = models.ImageField(upload_to='images', verbose_name='Картинка', blank=True)
    num_of_views = models.IntegerField(default=0, verbose_name='Количество просмотров')

    @property
    def short_description(self):
        return self.description[0:15] + ' ...' if len(self.description) > 15 else self.description

    @property
    def img_url(self):
        return self.image.url

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    def __str__(self):
        return self.name


class AboutPageText(models.Model):
    about_text = RichTextUploadingField(verbose_name='Текст, расположенный на странице "О нас"')

    class Meta:
        verbose_name = 'Текст, расположенный на странице "О нас"'
        verbose_name_plural = 'Текст, расположенный на странице "О нас"'

    def __str__(self):
        return self.about_text[:30] or self.about_text

    def save(self, *args, **kwargs):
        if AboutPageText.objects.exists() and not self.pk:
            raise ValidationError('Вы можете добавить только один текст для страницы "О нас". '
                                  'Выберите существующий текст и нажмите кнопку редактировать')
        return super(AboutPageText, self).save(*args, **kwargs)


class ContactsPageText(models.Model):
    contacts_text = RichTextUploadingField(verbose_name='Текст, расположенный на странице "Контакты"')

    class Meta:
        verbose_name = 'Текст, расположенный на странице "Контакты"'
        verbose_name_plural = 'Текст, расположенный на странице "Контакты"'

    def __str__(self):
        return self.contacts_text[0:30] or self.contacts_text

    def save(self, *args, **kwargs):
        if ContactsPageText.objects.exists() and not self.pk:
            raise ValidationError('Вы можете добавить только один текст для страницы "Контакты". '
                                  'Выберите существующий текст и нажмите кнопку редактировать')
        return super(ContactsPageText, self).save(*args, **kwargs)


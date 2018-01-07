from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=50, verbose_name='Имя')
    ip = models.CharField(max_length=33)
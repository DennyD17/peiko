# Generated by Django 2.0.1 on 2018-01-07 21:19

import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product1',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Наименование')),
                ('description', ckeditor_uploader.fields.RichTextUploadingField(verbose_name='Описание')),
                ('image', models.ImageField(blank=True, upload_to='images', verbose_name='Картинка')),
            ],
            options={
                'verbose_name_plural': 'Продукты',
                'verbose_name': 'Продукт',
            },
        ),
        migrations.CreateModel(
            name='ProductType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=70, verbose_name='Наименование типа')),
            ],
            options={
                'verbose_name_plural': 'Типы продуктов',
                'verbose_name': 'Тип продукта',
            },
        ),
        migrations.DeleteModel(
            name='Product',
        ),
        migrations.AddField(
            model_name='product1',
            name='product_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.ProductType', verbose_name='Тип продукта'),
        ),
    ]

# Generated by Django 2.0.1 on 2018-01-10 08:43

import ckeditor_uploader.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_product_num_of_views'),
    ]

    operations = [
        migrations.CreateModel(
            name='AboutPageText',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('about_text', ckeditor_uploader.fields.RichTextUploadingField(verbose_name='Текст, расположенный на странице "О нас"')),
            ],
            options={
                'verbose_name_plural': 'Текст, расположенный на странице "О нас"',
                'verbose_name': 'Текст, расположенный на странице "О нас"',
            },
        ),
        migrations.CreateModel(
            name='ContactsPageText',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contacts_text', ckeditor_uploader.fields.RichTextUploadingField(verbose_name='Текст, расположенный на странице "Контакты"')),
            ],
            options={
                'verbose_name_plural': 'Текст, расположенный на странице "Контакты"',
                'verbose_name': 'Текст, расположенный на странице "Контакты"',
            },
        ),
    ]

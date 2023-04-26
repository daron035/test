# Generated by Django 4.1.6 on 2023-03-19 00:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_product_year_released_alter_product_sku'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='SKU',
            new_name='sku',
        ),
        migrations.AlterField(
            model_name='product',
            name='year_released',
            field=models.IntegerField(),
        ),
    ]
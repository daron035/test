# Generated by Django 4.1.6 on 2023-03-14 20:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_alter_category_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='parent_category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.category'),
        ),
        migrations.AlterField(
            model_name='category',
            name='type',
            field=models.CharField(blank=True, choices=[('B', 'Brand')], default='B', max_length=2, null=True),
        ),
    ]

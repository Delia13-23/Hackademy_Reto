# Generated by Django 3.1.7 on 2021-03-03 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curriculums', '0006_auto_20210303_1743'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='skill_type',
            field=models.CharField(choices=[('Soft', 'soft'), ('Hard', 'Hard')], default='soft', max_length=5),
        ),
    ]
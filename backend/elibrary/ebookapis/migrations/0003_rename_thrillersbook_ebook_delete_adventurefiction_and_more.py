# Generated by Django 5.0.6 on 2024-12-05 11:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ebookapis', '0002_adventurefiction_classicbooks_romancebook_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='ThrillersBook',
            new_name='EBook',
        ),
        migrations.DeleteModel(
            name='AdventureFiction',
        ),
        migrations.DeleteModel(
            name='ClassicBooks',
        ),
        migrations.DeleteModel(
            name='KidsBook',
        ),
        migrations.DeleteModel(
            name='RomanceBook',
        ),
    ]

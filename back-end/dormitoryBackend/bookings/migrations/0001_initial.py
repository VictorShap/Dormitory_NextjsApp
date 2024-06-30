# Generated by Django 5.0.6 on 2024-06-27 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('booking_id', models.BigAutoField(primary_key=True, serialize=False, verbose_name='Booking ID')),
                ('student_id', models.BigIntegerField(blank=True, null=True, verbose_name='Student ID')),
                ('room_id', models.BigIntegerField(blank=True, null=True, verbose_name='Room ID')),
                ('booking_date', models.DateTimeField(auto_now_add=True, verbose_name='Booking Date')),
                ('confirmation_status', models.CharField(choices=[('Confirmed', 'Confirmed'), ('Pending', 'Pending'), ('Cancelled', 'Cancelled')], default='Pending', max_length=10, verbose_name='Confirmation Status')),
            ],
            options={
                'verbose_name': 'Booking',
                'verbose_name_plural': 'Bookings',
                'db_table': 'bookings',
            },
        ),
    ]

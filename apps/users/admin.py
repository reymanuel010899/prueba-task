from django.contrib import admin
from rest_framework.authtoken.models import Token
from .models import User

# Register your models here.

admin.site.register(User)
admin.site.register(Token)
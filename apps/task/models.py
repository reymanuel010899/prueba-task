from operator import truediv
from django.db import models
from django.forms import EmailField

# Create your models here.

class TaskModel(models.Model):
    title = models.CharField(max_length=50, null=True, blank=True)
    gmail = models.EmailField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, blank=True)
    due_date = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title if self.title else ''
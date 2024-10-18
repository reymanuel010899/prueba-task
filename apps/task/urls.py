from django.urls import path
from . import views
app_name = 'tasks'

urlpatterns = [
    path('task/create/', views.TaskCreate.as_view(), name='create'),
    path('task/detail/<int:pk>/', views.TaskDetail.as_view(), name='detail'),
    path('task/list/', views.TaskList.as_view(), name='list'),
    path('task/delete/<int:pk>/', views.TaskDelete.as_view(), name='delete'),
    path('task/update/<int:pk>/', views.TaskUpdate.as_view(), name='update')
]

from django.urls import path
from . import views
app_name = 'users'


urlpatterns = [
    path('login/', views.LoginView.as_view(), name='login'),
    path('create-user/', views.Crearusuarioview.as_view()),
    path('logout/', views.logoutView.as_view(), name='logout')
]

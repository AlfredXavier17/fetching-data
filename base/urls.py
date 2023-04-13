from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello.as_view(), name='hello'),
]


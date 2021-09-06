from django.contrib.auth.models import User
from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html')

def c4_home(request):
    return render(request, 'c4_home.html')
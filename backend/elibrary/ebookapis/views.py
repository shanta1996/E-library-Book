# from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import viewsets
from .models import *
from .serializers import *
from rest_framework.authtoken.models import Token

# Create your views here.


class KidsBookList(generics.ListCreateAPIView):
    queryset=KidsBook.objects.all()
    serializer_class=KidsBookSerializer

class ClassicBooksList(generics.ListCreateAPIView):
    queryset=ClassicBooks.objects.all()
    serializer_class=ClassicBooksSerializer

class RomanceBookList(generics.ListCreateAPIView):
    queryset=RomanceBook.objects.all()
    serializer_class=RomanceBookSerializer


class ThrillersBookList(generics.ListCreateAPIView):
    queryset=ThrillersBook.objects.all()
    serializer_class=ThrillersBookSerializer
    
class AdventureFictionList(generics.ListCreateAPIView):
    queryset=AdventureFiction.objects.all()
    serializer_class=AdventureFictionSerializer
    # permission_classes=[permissions.IsAuthenticatedOrReadOnly]
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
    # lookup_field='id'


# class KidsBookSingelList(generics.ListCreateAPIView):
#     queryset=KidsBook.objects.all()
#     serializer_class=KidsBookSerializer
#     lookup_field='id'

class KidsBookUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset=KidsBook.objects.all()
    serializer_class=KidsBookSerializer
    lookup_field='id'


class ClassicBooksList(generics.ListCreateAPIView):
    queryset=ClassicBooks.objects.all()
    serializer_class=ClassicBooksSerializer

class ClassicBookUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset=ClassicBooks.objects.all()
    serializer_class=ClassicBooksSerializer
    lookup_field='id'

class RomanceBookList(generics.ListCreateAPIView):
    queryset=RomanceBook.objects.all()
    serializer_class=RomanceBookSerializer

class RomanceBookUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset=RomanceBook.objects.all()
    serializer_class=RomanceBookSerializer
    lookup_field='id'


class ThrillersBookList(generics.ListCreateAPIView):
    queryset=ThrillersBook.objects.all()
    serializer_class=ThrillersBookSerializer

class ThrillersBookUdpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset=ThrillersBook.objects.all()
    serializer_class=ThrillersBookSerializer
    lookup_field='id'
    
class AdventureFictionList(generics.ListCreateAPIView):
    queryset=AdventureFiction.objects.all()
    serializer_class=AdventureFictionSerializer
    # permission_classes=[permissions.IsAuthenticatedOrReadOnly]

class AdventureFictionUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset=AdventureFiction.objects.all()
    serializer_class=AdventureFictionSerializer
    lookup_field='id'
# from django.shortcuts import render
# from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.views import APIView
from .models import *
from .serializers import *
from rest_framework.filters import SearchFilter
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.parsers import JSONParser
from django.db import IntegrityError
from django.http import JsonResponse
from rest_framework import permissions,status
from rest_framework.authtoken.models import Token

# Create your views here.
# class EbookList(APIView):
#     def get(self,request):
#         ebook_obj=EBook.objects.all()
#         serializer=EbookSerializer(ebook_obj,many=True)
#         return Response(serializer.data)


#     def post(self,request):
#         data=request.data
#         serializer=EbookSerializer(data=data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors)
    
#     def put(self,request):
#         try:
#             data=request.data
#             ebook_obj=EBook.objects.get(id=data['id'])
#             serializer=EbookSerializer(ebook_obj,data=data,partial=False)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response(serializer.data)
#             return Response(serializer.errors)
        
#         except Exception as e:
#             return Response({'error':'invalid id'})
        
#     def patch(self,request):
#         try:
#             data=request.data
#             ebook_obj=EBook.objects.get(id=data['id'])
#             serializer=EbookSerializer(ebook_obj,data=data,partial=True)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response(serializer.data)
#             return Response(serializer.errors)
        
#         except Exception as e:
#             return Response({'error':'invalid id'})
        
#     def delete(self,request):
#         try:
#             ebook_obj=EBook.objects.get(id=request.data['id'])
#             ebook_obj.delete()
#             return Response({'message':'Deleted'})
#         except Exception as e:
#             return Response({'message':'invalid error'})










class EBooksList(viewsets.ModelViewSet):
    queryset=EBook.objects.all()
    serializer_class=EBooksListSerializer
    filter_backends = [SearchFilter]
    search_fields=['^book_name']

    def list(self,request):
        search=request.GET.get('search')
        queryset=self.queryset
        if search:
            queryset=queryset.filter(book_name__startswith=search)
        serializer=EBooksListSerializer(queryset,many=True)
        return Response(serializer.data)


@csrf_exempt
def signup(request):
    if request.method=='POST':
        try:
            data=JSONParser().parse(request)
            user=User.objects.create_user(username=data['username'],password=data['password'])
            user.save()
            token=Token.objects.create(user=user)
            return JsonResponse({'token':str(token)},status=200)
        except IntegrityError:
            return JsonResponse({'error':'Username has already taken'},status=400)


@csrf_exempt
def login(request):
    if request.method=='POST':
        data=JSONParser().parse(request)
        user=authenticate(request,username=data['username'],password=data['password'])

        if user is None:
            return JsonResponse({'error':'username and password did not match'},status=400)
        
        else:
            try:
                token=Token.objects.get(user=user)

            except:
                token=Token.objects.create(user=user)
            return JsonResponse({'token':str(token)},status=200)










# class KidsBookList(generics.ListCreateAPIView):
#     queryset=KidsBook.objects.all()
#     serializer_class=KidsBookSerializer
#     lookup_field='id'


# class KidsBookSingelList(generics.ListCreateAPIView):
#     queryset=KidsBook.objects.all()
#     serializer_class=KidsBookSerializer
#     lookup_field='id'

# class KidsBookUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
#     queryset=KidsBook.objects.all()
#     serializer_class=KidsBookSerializer
#     lookup_field='id'


# class ClassicBooksList(viewsets.ModelViewSet):
#     queryset=ClassicBooks.objects.all()
#     serializer_class=ClassicBooksSerializer

# class ClassicBookUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
#     queryset=ClassicBooks.objects.all()
#     serializer_class=ClassicBooksSerializer
#     lookup_field='id'

# class RomanceBookList(generics.ListCreateAPIView):
#     queryset=RomanceBook.objects.all()
#     serializer_class=RomanceBookSerializer

# class RomanceBookUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
#     queryset=RomanceBook.objects.all()
#     serializer_class=RomanceBookSerializer
#     lookup_field='id'


# class ThrillersBookList(generics.ListCreateAPIView):
#     queryset=ThrillersBook.objects.all()
#     serializer_class=ThrillersBookSerializer

# class ThrillersBookUdpdateDelete(generics.RetrieveUpdateDestroyAPIView):
#     queryset=ThrillersBook.objects.all()
#     serializer_class=ThrillersBookSerializer
#     lookup_field='id'
    
# class AdventureFictionList(generics.ListCreateAPIView):
#     queryset=AdventureFiction.objects.all()
#     serializer_class=AdventureFictionSerializer
#     # permission_classes=[permissions.IsAuthenticatedOrReadOnly]

# class AdventureFictionUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
#     queryset=AdventureFiction.objects.all()
#     serializer_class=AdventureFictionSerializer
#     lookup_field='id'


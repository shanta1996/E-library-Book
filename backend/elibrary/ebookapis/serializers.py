from rest_framework import serializers
from .models import *


class EbookSerializer(serializers.ModelSerializer):
    class Meta:
        model=EBook
        # fields='__all__'
        exclude=['image']







# class EBooksListSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=EBook
#         fields='__all__'



# class KidsBookSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=KidsBook
#         fields='__all__'


# class ClassicBooksSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=ClassicBooks
#         fields='__all__'


# class RomanceBookSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=RomanceBook
#         fields='__all__'


# class ThrillersBookSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=ThrillersBook
#         fields='__all__'


# class AdventureFictionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=AdventureFiction
#         fields='__all__'


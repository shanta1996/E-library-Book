from django.urls import path
from .views import *

urlpatterns = [
    path('kidsbook/',KidsBookList.as_view()),
    path('classicbooks/',ClassicBooksList.as_view()),
    path('romancebook/',RomanceBookList.as_view()),
    path('thrillersbook/',ThrillersBookList.as_view()),
    path('adventurebook/',AdventureFictionList.as_view()),
]

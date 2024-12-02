from django.urls import path
from .views import *

urlpatterns = [
    path('kidsbook/',KidsBookList.as_view()),
    path('kidsbookupdatedelete/<id>/',KidsBookUpdateDelete.as_view()),
    path('classicbooks/',ClassicBooksList.as_view()),
    path('classicbooksupdatedelete/<id>/',ClassicBookUpdateDelete.as_view()),
    path('romancebook/',RomanceBookList.as_view()),
    path('romancebookupdatedelete/<id>/',RomanceBookUpdateDelete.as_view()),
    path('thrillersbook/',ThrillersBookList.as_view()),
    path('thrillersbookupdatedelete/<id>/',ThrillersBookUdpdateDelete.as_view()),
    path('adventurebook/',AdventureFictionList.as_view()),
    path('adventurebookupdatedelete/<id>/',AdventureFictionUpdateDelete.as_view()),
]

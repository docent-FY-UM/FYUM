
from django.urls import path
from recom import views
urlpatterns = [
    path('recom/',views.get_recom_paintings),
    path('test/',views.CF_recommed)
]

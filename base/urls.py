from django.urls import include, re_path
from base.views import *
from rest_framework.routers import DefaultRouter


urlpatterns = [
    re_path(r"^$", IndexView.as_view(), name='index'),
    ]

router = DefaultRouter()
router.register(r'api/products', ProductViewSet)

urlpatterns += router.urls

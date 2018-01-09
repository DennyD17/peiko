from django.urls import include, re_path
from base.views import *
from rest_framework.routers import DefaultRouter


urlpatterns = [
    re_path(r"^$", IndexView.as_view(), name='index'),
    re_path(r'^api/top-products$', TopSixProductsView.as_view()),
    ]

router = DefaultRouter()
router.register(r'api/products', ProductViewSet)

urlpatterns += router.urls

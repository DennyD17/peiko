from django.urls import re_path
from base.views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'api/products', ProductViewSet)
router.register(r'api/about', AboutPageTextViewSet)
router.register(r'api/contacts', ContactsPageTextViewSet)

urlpatterns = [
    re_path(r'^api/$', router.get_api_root_view()),
]

urlpatterns += router.urls
urlpatterns += [re_path(r'^.*$', IndexView.as_view(), name='index')]

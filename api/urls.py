from base.views import *
from rest_framework.routers import DefaultRouter
from .views import *

urlpatterns = [
]

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'about', AboutPageTextViewSet)
router.register(r'contacts', ContactsPageTextViewSet)
router.register(r'categories', ProductTypeViewSet)

urlpatterns += router.urls

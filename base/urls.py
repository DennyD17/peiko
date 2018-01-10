from base.views import *
from rest_framework.routers import DefaultRouter

urlpatterns = [
]

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'about', AboutPageTextViewSet)
router.register(r'contacts', ContactsPageTextViewSet)

urlpatterns += router.urls

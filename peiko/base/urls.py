from django.urls import include, re_path
from base.views import index_view
from base import api as base_api

urlpatterns = [
    re_path(r"^index/", index_view),
    re_path(r"^api/me/", base_api.products, name="api-me"),
]
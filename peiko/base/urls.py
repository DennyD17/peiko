from django.urls import include, re_path
from base.views import index_view

urlpatterns = [
    re_path(r"^/a$", index_view),
    ]
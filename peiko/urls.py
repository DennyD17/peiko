from django.contrib import admin
from django.urls import include, re_path
from django.views.static import serve
from .settings import MEDIA_ROOT

urlpatterns = [
    re_path(r"^admin/", admin.site.urls),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': MEDIA_ROOT}),
    re_path(r'^ckeditor/', include('ckeditor_uploader.urls')),
    re_path(r"^api/", include("api.urls")),
    re_path(r"^", include("base.urls"))
]



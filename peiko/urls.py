from django.contrib import admin
from django.urls import include, re_path
from django.views.static import serve
from .settings import MEDIA_ROOT
from base.views import IndexView

urlpatterns = [
    re_path(r"^admin/", admin.site.urls),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': MEDIA_ROOT}),
    re_path(r'^ckeditor/', include('ckeditor_uploader.urls')),
    re_path(r"^api/", include("base.urls")),
]

urlpatterns += [re_path(r'^$', IndexView.as_view(), name='index')]
urlpatterns += [re_path(r'^products/$', IndexView.as_view(), name='index')]
urlpatterns += [re_path(r'^products/[0-9]+/$', IndexView.as_view(), name='index')]
urlpatterns += [re_path(r'^about/$', IndexView.as_view(), name='index')]
urlpatterns += [re_path(r'^contacts/$', IndexView.as_view(), name='index')]



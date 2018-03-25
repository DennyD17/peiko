from base.views import *
from django.urls import re_path

urlpatterns = [
    re_path(r'^$', IndexView.as_view(), name='index'),
]

urlpatterns += [re_path(r'^products/$', IndexView.as_view(), name='index')]
urlpatterns += [re_path(r'^products/(?P<pk>[0-9]+)/$', ProductView.as_view(), name='product')]
urlpatterns += [re_path(r'^about/$', AboutPageView.as_view(), name='about')]
urlpatterns += [re_path(r'^contacts/$', ContactsPageView.as_view(), name='contacts')]
urlpatterns += [re_path(r'^categories/$', CategoryView.as_view(), name='categories')]

from django.shortcuts import render
from .models import Product


# Create your views here.
def index_view(request):
    return render(request, template_name='index.html', context={'qs': Product.objects.all()})

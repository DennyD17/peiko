from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse_lazy
from base.models import Product


@api_view(["GET"])
def api_root(request, format=None):
    return Response(
    {
        "notifications/status": reverse_lazy("api-products", request=request, format=format),
    })


@api_view(["GET"])
def products(request):
    result = dict()
    result['count'] = Product.objects.all().count()
    result['names'] = [obj.name for obj in Product.objects.all()]
    return Response(result)

from django.shortcuts import render
from rest_framework import generics
from .models import Product,Category
from .serializers import ProductSerializer,CategorySerializer

def api_list(request):
    return render(request,'api/api_list.html')

class ProductList(generics.ListCreateAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Product.objects.all()
    serializer_class = ProductSerializer

class CategoryList(generics.ListCreateAPIView):
    queryset=Category.objects.all()
    serializer_class= CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductsByCategory(generics.ListAPIView):
    serializer_class=ProductSerializer

    def get_queryset(self):
        category_id=self.kwargs['id']
        return Product.objects.filter(category_id=category_id)


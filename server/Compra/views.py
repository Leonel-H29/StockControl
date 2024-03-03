from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import Producto, Proveedor
from .serializers import ProductoSerializer, ProveedorSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
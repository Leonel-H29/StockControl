from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import Producto, Proveedor
from .serializers import ProductoSerializer, ProveedorSerializer

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
#from stockserver.swagger import 

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_summary="Lista todos los productos",
        operation_description="Obtiene una lista de todos los productos disponibles",
         manual_parameters= [
            openapi.Parameter(
                name='Authorization',
                in_=openapi.IN_HEADER,
                required=True,
                type=openapi.TYPE_STRING,
                description='Token de acceso (Token access_token)'
            ),
        ],
        responses={200: ProductoSerializer(many=True), 401: 'No autorizado', 500: 'Se ha producido un error interno en el servidor'}
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
    @swagger_auto_schema(
        operation_summary="Obtiene un producto específico",
        operation_description="Obtiene los detalles de un producto específico por ID",
        responses={200: ProductoSerializer, 401: 'No autorizado', 404: 'No encontrado', 500: 'Se ha producido un error interno en el servidor'}
    )
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="Crea un nuevo producto",
        operation_description="Agrega un nuevo producto a la base de datos",
        request_body=ProductoSerializer,
        responses={201: ProductoSerializer, 400: 'Datos inválidos', 401: 'No autorizado', 500: 'Se ha producido un error interno en el servidor'}
    )
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="Actualiza un producto",
        operation_description="Actualiza los detalles de un producto existente",
        request_body=ProductoSerializer,
        responses={200: ProductoSerializer, 400: 'Datos inválidos', 401: 'No autorizado', 404: 'No encontrado', 500: 'Se ha producido un error interno en el servidor'}
    )
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="Actualización parcial de un producto",
        operation_description="Actualiza parcialmente los detalles de un producto existente",
        request_body=ProductoSerializer,
        responses={200: ProductoSerializer, 400: 'Datos inválidos', 401: 'No autorizado', 404: 'No encontrado', 500: 'Se ha producido un error interno en el servidor'}
    )
    def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="Elimina un producto",
        operation_description="Elimina un producto de la base de datos",
        responses={204: 'Eliminado correctamente', 401: 'No autorizado', 404: 'No encontrado', 500: 'Se ha producido un error interno en el servidor'}
    )
    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)

class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_summary="Lista todos los proveedores",
        operation_description="Obtiene una lista de todos los proveedores disponibles",
         manual_parameters=[
            openapi.Parameter(
                name='Authorization',
                in_=openapi.IN_HEADER,
                required=True,
                type=openapi.TYPE_STRING,
                description='Token de acceso (Token access_token)'
            ),
        ],
        responses={200: ProveedorSerializer(many=True), 401: 'No autorizado', 401: 'No autorizado', 500: 'Se ha producido un error interno en el servidor'}
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
    @swagger_auto_schema(
        operation_summary="Obtiene un proveedor específico",
        operation_description="Obtiene los detalles de un proveedor específico por ID",
        responses={200: ProveedorSerializer, 401: 'No autorizado', 404: 'No encontrado', 500: 'Se ha producido un error interno en el servidor'}
    )
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="Crea un nuevo proveedor",
        operation_description="Agrega un nuevo proveedor a la base de datos",
        request_body=ProveedorSerializer,
        responses={201: ProveedorSerializer, 400: 'Datos inválidos', 401: 'No autorizado', 500: 'Se ha producido un error interno en el servidor'}
    )
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="Actualiza un proveedor",
        operation_description="Actualiza los detalles de un proveedor existente",
        request_body=ProveedorSerializer,
        responses={200: ProveedorSerializer, 400: 'Datos inválidos', 401: 'No autorizado', 404: 'No encontrado', 500: 'Se ha producido un error interno en el servidor'}
    )
    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="Actualización parcial de un proveedor",
        operation_description="Actualiza parcialmente los detalles de un proveedor existente",
        request_body=ProveedorSerializer,
        responses={200: ProveedorSerializer, 400: 'Datos inválidos', 401: 'No autorizado', 404: 'No encontrado', 500: 'Se ha producido un error interno en el servidor'}
    )
    def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)

    @swagger_auto_schema(
        operation_summary="Elimina un proveedor",
        operation_description="Elimina un proveedor de la base de datos",
        responses={204: 'Eliminado correctamente', 401: 'No autorizado', 404: 'No encontrado', 500: 'Se ha producido un error interno en el servidor'}
    )
    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
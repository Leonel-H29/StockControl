from rest_framework import serializers
from .models import Producto, Proveedor

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

    def to_representation(self, instance):
        return {
        "idproducto": instance.idproducto,
        "nombre": instance.nombre,
        "precio": instance.precio,
        "stock_actual": instance.stock_actual,
        "created": instance.created,
        "updated": instance.updated,
        "proveedor": {
            "idproveedor": instance.proveedor.idproveedor,
            "proveedor": f"{instance.proveedor.nombre} {instance.proveedor.apellido}" 

        }
    }

class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = '__all__'
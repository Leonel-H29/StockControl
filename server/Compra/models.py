from django.db import models

# Create your models here.
class Proveedor(models.Model):
    idproveedor = models.AutoField(primary_key=True, help_text="ID único para cada proveedor")
    nombre = models.CharField(max_length=255, help_text="Nombre del proveedor")
    apellido = models.CharField(max_length=255, help_text="Apellido del proveedor")
    cuit = models.IntegerField(help_text="Clave Única de Identificación Tributaria del proveedor")
    created = models.DateTimeField(auto_now_add=True, help_text="Fecha y hora de creación del registro")
    updated = models.DateTimeField(auto_now=True, help_text="Fecha y hora de la última modificación del registro")

    def __str__(self):
        return f"{self.nombre} {self.apellido}"


class Producto(models.Model):
    idproducto = models.AutoField(primary_key=True, help_text="ID único para cada producto")
    nombre = models.CharField(max_length=255, help_text="Nombre del producto")
    precio = models.DecimalField(max_digits=10, decimal_places=2,help_text="Precio del producto")
    stock_actual = models.IntegerField(help_text="Cantidad actual disponible del producto")
    proveedor = models.ForeignKey(Proveedor, on_delete=models.DO_NOTHING, to_field='idproveedor', db_column='idproveedor',help_text="Proveedor del producto")
    created = models.DateTimeField(auto_now_add=True, help_text="Fecha y hora de creación del registro")
    updated = models.DateTimeField(auto_now=True, help_text="Fecha y hora de la última modificación del registro")

    def __str__(self):
        return self.nombre
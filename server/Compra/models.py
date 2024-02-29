from django.db import models
from django.db.models import DO_NOTHING
from stockserver.validators import letter_validator, cuil_validator, alphanumeric_validator
from django.core.validators import MinValueValidator

# Create your models here.
class Proveedor(models.Model):
    idproveedor = models.AutoField(primary_key=True, help_text="ID único para cada proveedor")
    nombre = models.CharField(max_length=255, validators=[letter_validator],help_text="Nombre del proveedor")
    apellido = models.CharField(max_length=255, validators=[letter_validator],help_text="Apellido del proveedor")
    cuit = models.IntegerField(unique=True,validators=[cuil_validator],help_text="Clave Única de Identificación Tributaria del proveedor")
    created = models.DateTimeField(auto_now_add=True, help_text="Fecha y hora de creación del registro")
    updated = models.DateTimeField(auto_now=True, help_text="Fecha y hora de la última modificación del registro")

    class Meta:
        db_table='proveedor'
        ordering = ['apellido', 'nombre', 'idproveedor']
        unique_together = ('idproveedor','nombre','apellido','cuit')
    
    def __str__(self):
        return f"{self.nombre} {self.apellido} {self.cuit}"
    


class Producto(models.Model):
    idproducto = models.AutoField(primary_key=True, help_text="ID único para cada producto")
    nombre = models.CharField(max_length=255,validators=[alphanumeric_validator], help_text="Nombre del producto")
    precio = models.DecimalField(max_digits=10, decimal_places=2,validators=[MinValueValidator(0)],default=0,help_text="Precio del producto")
    stock_actual = models.IntegerField(validators=[MinValueValidator(0)],default=0,help_text="Cantidad actual disponible del producto")
    proveedor = models.ForeignKey(Proveedor, on_delete=DO_NOTHING, to_field='idproveedor', db_column='idproveedor',help_text="Proveedor del producto")
    created = models.DateTimeField(auto_now_add=True, help_text="Fecha y hora de creación del registro")
    updated = models.DateTimeField(auto_now=True, help_text="Fecha y hora de la última modificación del registro")

    class Meta:
        db_table='producto'
        ordering = ['nombre', 'precio', 'proveedor']
        unique_together = ('idproducto','nombre','proveedor')


    def __str__(self):
        return self.nombre
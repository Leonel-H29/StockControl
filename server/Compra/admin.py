from django.contrib import admin
from .models import Producto, Proveedor

class ProductoAdmin(admin.ModelAdmin):
    list_display = ('idproducto', 'nombre', 'precio', 'stock_actual', 'proveedor', 'created', 'updated')
    list_filter = ('proveedor', 'created', 'updated')
    search_fields = ('nombre', 'proveedor__nombre')

class ProveedorAdmin(admin.ModelAdmin):
    list_display = ('idproveedor', 'nombre', 'apellido', 'cuit', 'created', 'updated')
    list_filter = ('created', 'updated')
    search_fields = ('nombre', 'apellido', 'cuit')

admin.site.register(Producto, ProductoAdmin)
admin.site.register(Proveedor, ProveedorAdmin)
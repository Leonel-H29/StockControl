from django.contrib import admin
from .models import Producto


class ProductoAdmin(admin.ModelAdmin):
    list_display = ('idproducto', 'nombre', 'precio', 'stock_actual', 'proveedor', 'created', 'updated')
    list_filter = ('proveedor', 'created', 'updated')
    search_fields = ('nombre', 'proveedor__nombre')

admin.site.register(Producto, ProductoAdmin)


from .models import Proveedor
from django.contrib import admin

class ProveedorAdmin(admin.ModelAdmin):
    list_display = ('idproveedor', 'nombre', 'apellido', 'cuit', 'created', 'updated')
    list_filter = ('created', 'updated')
    search_fields = ('nombre', 'apellido', 'cuit')

admin.site.register(Proveedor, ProveedorAdmin)


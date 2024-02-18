from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from Producto.urls import router as routerProductos
from Proveedor.urls import router as routerProveedores


class DefaultRouter(routers.DefaultRouter):
    """
    Extends `DefaultRouter` class to add a method for
    extending url routes from another router.
    """

    def extend(self, router):
        """
        Extend the routes with url routes of the passed in router.

        Args:
             router: SimpleRouter instance containing route definitions.
        """
        self.registry.extend(router.registry)

router = DefaultRouter()
router.extend(routerProductos)
router.extend(routerProveedores)


url = 'api/'
urlpatterns = [
    path('admin/', admin.site.urls),
    path(url, include(router.urls)),
]

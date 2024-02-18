from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from Compra.urls import router as routerCompras


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
router.extend(routerCompras)


url = 'api/'
urlpatterns = [
    path('admin/', admin.site.urls),
    path(url, include(router.urls)),
]

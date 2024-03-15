from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers, permissions
from Compra.urls import router as routerCompras
from .views import login, register
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

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

schema_view = get_schema_view(
   openapi.Info(
      title="API de Sistema de Gestión de Stock",
      default_version='v1',
      description="Documentación de la Sistema de Gestión de Stock",
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)



url = 'api/'
urlpatterns = [
    path('admin/', admin.site.urls),
    path(url, include(router.urls)),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path('login', login),
    re_path('register', register)
]

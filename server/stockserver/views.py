from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status

from .serializers import UserSerializer
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


@swagger_auto_schema(
        method='post', 
        request_body=UserSerializer, 
        responses={
            status.HTTP_200_OK: openapi.Response('Token generado correctamente', schema=openapi.Schema(type='object', properties={'token': openapi.Schema(type='string', description='Token de autenticación'), 'user': openapi.Schema(type='object', description='Información del usuario')})),
            status.HTTP_400_BAD_REQUEST: openapi.Response('Usuario no encontrado'),
            status.HTTP_500_INTERNAL_SERVER_ERROR: openapi.Response('Se ha producido un error interno en el servidor')
        }
)
@api_view(['POST'])
def login(request):

    """
    Iniciar sesión de usuario.

    Genera un token de autenticación para el usuario.

    Se espera recibir un objeto JSON con las siguientes claves:
    - username: Nombre de usuario del usuario.
    - password: Contraseña del usuario.

    Retorna un objeto JSON con las siguientes claves:
    - token: Token de autenticación generado.
    - user: Información del usuario autenticado.
    """

    #print(request.data)
    user= get_object_or_404(User,username=request.data['username'] )

    if not user.check_password(request.data['password']):
        return Response({"error": "Contraseña invalida"}, status=status.HTTP_400_BAD_REQUEST)
    
    token, created = Token.objects.get_or_create(user=user)

    serializer = UserSerializer(instance=user)
    return Response({'token': token.key, "user": serializer.data}, status=status.HTTP_200_OK)



@swagger_auto_schema(
        method='post', 
        request_body=UserSerializer, 
        responses={
            status.HTTP_201_CREATED: openapi.Response('Usuario Creado - Token generado correctamente', schema=openapi.Schema(type='object', properties={'token': openapi.Schema(type='string', description='Token de autenticación'), 'user': openapi.Schema(type='object', description='Información del usuario')}) ),
            status.HTTP_400_BAD_REQUEST: openapi.Response('Datos inválidos'),
            status.HTTP_500_INTERNAL_SERVER_ERROR: openapi.Response('Se ha producido un error interno en el servidor')
        }
)
@api_view(['POST'])
def register(request):

    """
    Registrar nuevo usuario.

    Crea un nuevo usuario con la información proporcionada en el cuerpo de la solicitud.

    Se espera recibir un objeto JSON con las siguientes claves:
    - username: Nombre de usuario del nuevo usuario.
    - email: Correo electronico del nuevo usuario.
    - password: Contraseña del nuevo usuario.

    Retorna un objeto JSON con las siguientes claves:
    - token: Token de autenticación generado para el nuevo usuario.
    - user: Información del nuevo usuario registrado.
    """

    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=serializer.data['username'])
        user.set_password(serializer.data['password'])
        user.save()

        token = Token.objects.create(user=user)
        return Response({'token': token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
from rest_framework import generics

from entities.user.serializers import UserSerializer


class UserCreation(generics.CreateAPIView):
    serializer_class = UserSerializer


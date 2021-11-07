from rest_framework import generics

from entities.user.serializers import UserSerializer


class UserCreation(generics.CreateAPIView):
    serializer_class = UserSerializer


    def create(self, request, *args, **kwargs):
        from rest_framework_simplejwt.tokens import RefreshToken
        response = super(UserCreation, self).create(request, *args, **kwargs)
        refresh = RefreshToken.for_user(request.user)

        response.data['refresh'] = str(refresh)
        response.data['access'] = str(refresh.access_token)
        return response

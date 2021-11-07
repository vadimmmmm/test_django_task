from rest_framework import generics, status
from rest_framework.request import Request
from rest_framework.response import Response

from entities.user.models import User
from entities.user.serializers import UserSerializer


class UserCreation(generics.CreateAPIView):
    serializer_class = UserSerializer

    def create(self, request: Request, *args, **kwargs) -> Response:
        from rest_framework_simplejwt.tokens import RefreshToken
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        response_data = serializer.data

        user = User.objects.get(id=response_data['id'])
        refresh = RefreshToken.for_user(user)

        response_data['refresh'] = str(refresh)
        response_data['access'] = str(refresh.access_token)

        return Response(response_data, status=status.HTTP_201_CREATED, headers=headers)

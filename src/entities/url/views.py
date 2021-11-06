from rest_framework import generics, status
from rest_framework.response import Response

from entities.url.access_policy import UrlAccessPolicy
from entities.url.serializers import UrlSerializer


class UrlCreation(generics.ListCreateAPIView):
    serializer_class = UrlSerializer

    # permission_classes = (UrlAccessPolicy,)

    def list(self, request, *args, **kwargs):
        return Response(status=status.HTTP_200_OK, data=self.get_queryset().values('generated_url'))

    def get_queryset(self):
        return self.request.user.urls.all()

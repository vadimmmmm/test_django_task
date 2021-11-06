from rest_framework import generics

from entities.url.access_policy import UrlAccessPolicy
from entities.url.serializers import UrlSerializer


class UrlCreation(generics.CreateAPIView):
    serializer_class = UrlSerializer
    # permission_classes = (UrlAccessPolicy,)

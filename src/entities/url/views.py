from django.shortcuts import redirect
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from entities.url.models import Url
from entities.url.serializers import UrlSerializer


class UrlCreationView(generics.ListCreateAPIView):
    serializer_class = UrlSerializer
    permission_classes = (IsAuthenticated,)

    def list(self, request, *args, **kwargs):
        return Response(status=status.HTTP_200_OK, data=self.get_queryset().values('generated_url'))

    def get_queryset(self):
        return self.request.user.urls.all()


class Redirect(generics.RetrieveAPIView):
    lookup_url_kwarg = 'query'
    lookup_field = 'generated_part'
    queryset = Url.objects.all()
    permission_classes = (IsAuthenticated,)

    def retrieve(self, request, *args, **kwargs):
        return redirect(self.get_object().real_url)

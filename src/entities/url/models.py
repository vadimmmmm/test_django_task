from functools import cached_property

from django.db import models

from common.models import Model
from entities.user.models import User


class Url(Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='urls')
    generated_url = models.URLField()
    real_url = models.URLField()

    @cached_property
    def generated_url(self) -> str:
        return self.generated_url

    @cached_property
    def real_url(self) -> str:
        return self.real_url

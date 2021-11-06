from functools import cached_property

from django.db import models

from entities.user.models import User


class Url(models.Model):
    id = models.UUIDField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='urls')
    generated_url = models.URLField()
    real_url = models.URLField()

    @cached_property
    def generated_url(self) -> str:
        return self.generated_url

    @cached_property
    def real_url(self) -> str:
        return self.real_url

    @cached_property
    def user_full_name(self) -> str:
        return self.user.get_full_name()





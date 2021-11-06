from functools import cached_property

from django.db import models

from common.models import Model
from entities.user.models import User
from project.settings import APPLICATION_DOMAIN


class Url(Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='urls')
    generated_url = models.URLField(null=False, blank=False)
    real_url = models.URLField()

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['generated_url', 'real_url'], name='urls')
        ]

    @cached_property
    def generated_url_name(self) -> str:
        return self.generated_url

    @cached_property
    def real_url_name(self) -> str:
        return self.real_url

    def before_first_save(self):
        self.generated_url = f'{APPLICATION_DOMAIN}:8000/{str(self.id)[:5].upper()}/'

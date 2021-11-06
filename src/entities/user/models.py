from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.db.models import QuerySet

from common.auth import AbstractBaseUser
from common.models import Model


class UserQuerySet(QuerySet):
    pass


class UserManager(BaseUserManager):

    def _create_user(self, user_name, password, **extra_fields) -> 'User':
        user = self.model(user_name=user_name, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_user(self, user_name, password, **extra_fields) -> 'User':
        return self._create_user(user_name, password, **extra_fields)

    def create_superuser(self, user_name, password, **extra_fields) -> 'User':
        return self._create_user(user_name, password, **extra_fields)


class User(Model, AbstractBaseUser):
    user_name = models.CharField(max_length=50, unique=True)

    USERNAME_FIELD = 'user_name'

    objects = UserManager.from_queryset(UserQuerySet)()

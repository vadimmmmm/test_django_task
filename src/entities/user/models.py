from django.contrib.auth.base_user import BaseUserManager
from django.db import models
from django.db.models import QuerySet

from common.auth import AbstractBaseUser, PermissionsMixin
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
        is_staff = extra_fields.pop('is_staff', False)
        return self._create_user(user_name, password, is_staff=is_staff, **extra_fields)

    def create_superuser(self, user_name, password, **extra_fields) -> 'User':
        extra_fields.setdefault('is_staff', True)
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        return self._create_user(user_name, password, **extra_fields)


class User(Model, AbstractBaseUser, PermissionsMixin):
    user_name = models.CharField(max_length=50, unique=True)

    is_staff = models.BooleanField(
        'staff status',
        default=False,
        help_text='Designates whether the user can log into this site.',
    )

    USERNAME_FIELD = 'user_name'

    objects = UserManager.from_queryset(UserQuerySet)()

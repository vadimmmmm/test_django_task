from django.contrib.auth import models as _models


class AbstractBaseUser(_models.AbstractBaseUser):
    class Meta:
        abstract = True


class BaseUserManager(_models.BaseUserManager):
    pass


class PermissionsMixin(_models.PermissionsMixin):
    class Meta:
        abstract = True

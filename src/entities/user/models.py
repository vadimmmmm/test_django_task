from django.db import models
from common.auth import AbstractBaseUser


class User(AbstractBaseUser):
    id = models.UUIDField(primary_key=True)
    user_name = models.CharField(max_length=50, unique=True)

    USERNAME_FIELD = 'user_name'

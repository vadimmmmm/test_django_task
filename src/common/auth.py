from django.contrib.auth import models as _models


class AbstractBaseUser(_models.AbstractBaseUser):
    class Meta:
        abstract = True

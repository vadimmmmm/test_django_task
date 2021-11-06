from django.db import models as _models
from uuid import uuid4


class Model(_models.Model):
    id = _models.UUIDField(primary_key=True, db_index=True, default=uuid4, editable=False)

    created_at = _models.DateTimeField(auto_now_add=True)
    updated_at = _models.DateTimeField(auto_now=True)

    @property
    def short_id(self) -> str:
        return self.id.hex

    class Meta:
        abstract = True

    def before_first_save(self):
        pass

    def after_first_save(self):
        pass

    def before_each_save(self):
        pass

    def after_each_save(self):
        pass

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):

        if self.created_at is None:
            self.before_first_save()
            self.before_each_save()
            super().save(
                force_insert=force_insert,
                force_update=force_update,
                using=using,
                update_fields=update_fields,
            )
            self.after_first_save()
        else:
            self.before_each_save()
            super().save(
                force_insert=force_insert,
                force_update=force_update,
                using=using,
                update_fields=update_fields,
            )
        self.after_each_save()

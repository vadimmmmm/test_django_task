from rest_framework import serializers

from entities.user.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'user_name'
        )
        extra_kwargs = {
            'password': {'write_only': True}
        }

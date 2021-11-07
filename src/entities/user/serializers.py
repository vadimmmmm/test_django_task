from rest_framework import serializers

from entities.user.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'user_name',
            'password',
        )
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.get('password', None)
        user: User = self.Meta.model(**validated_data)
        user.set_password(password)
        user.save()
        return user

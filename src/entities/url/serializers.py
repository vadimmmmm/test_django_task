from rest_framework import serializers

from entities.url.models import Url


class UrlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Url
        fields = (
            'id',
            'real_url',
            'generated_url',
        )

        extra_kwargs = {
            'generated_url': {'read_only': True}
        }

    def create(self, validated_data):
        request = self.context.get('request')
        validated_data['user'] = request.user
        url_instance = self.Meta.model(**validated_data)
        url_instance.save()
        return url_instance


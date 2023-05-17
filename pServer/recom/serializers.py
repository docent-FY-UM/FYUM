from rest_framework import serializers
from .models import painting

class RecommendSerializer(serializers.ModelSerializer):
    class Meta:
        model = painting
        fields = ("__all__")
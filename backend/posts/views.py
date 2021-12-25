from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from django.shortcuts import render
from . import models as post_models
from . import serializers as post_serializers


class PostViewSet(ModelViewSet):
    queryset = post_models.Post.objects.all()

    serializer_class = post_serializers.PostSerializer

    permission_classes = [AllowAny]  # FIXME: 인증 적용

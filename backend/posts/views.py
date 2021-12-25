from rest_framework.viewsets import ModelViewSet
from django.shortcuts import render
from . import models as post_models
from . import serializers as post_serializers


class PostViewSet(ModelViewSet):
    queryset = post_models.Post.objects.all()

    serializer_class = post_serializers.PostSerializer

from rest_framework.routers import DefaultRouter
from django.urls import include, path
from . import views as post_view

router = DefaultRouter()
router.register("posts", post_view.PostViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
]

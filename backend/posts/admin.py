from django.contrib import admin
from django.utils.safestring import mark_safe
from . import models as post_model

# Register your models here.


@admin.register(post_model.Post)
class PostAdmin(admin.ModelAdmin):
    list_display = (
        "photo_thumbnail",
        "author",
        "title",
        "desc",
        "location",
    )

    list_display_links = ["desc"]

    fieldsets = (
        (
            "게시글 정보",
            {
                "fields": (
                    "author",
                    "title",
                    "desc",
                    "location",
                    "photo",
                    "tags",
                    "like_user_set",
                ),
            },
        ),
    )

    filter_horizontal = (
        "tags",
        "like_user_set",
    )

    def photo_thumbnail(self, post):
        return mark_safe(f"<img src={post.photo.url} width=100px/>")


@admin.register(post_model.Tag)
class TagAdmin(admin.ModelAdmin):

    list_display = ("name",)

    list_filter = ("name",)

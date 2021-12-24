from django.contrib import admin
from . import models as post_model

# Register your models here.


@admin.register(post_model.Post)
class PostAdmin(admin.ModelAdmin):
    list_display = (
        "author",
        "title",
        "desc",
        "location",
    )

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
                ),
            },
        ),
    )

    filter_horizontal = ("tags",)


@admin.register(post_model.Tag)
class TagAdmin(admin.ModelAdmin):

    list_display = ("name",)

    list_filter = ("name",)

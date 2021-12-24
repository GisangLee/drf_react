from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models
from posts import models as post_model

# Register your models here.


class UserInline(admin.TabularInline):
    model = post_model.Post


@admin.register(models.User)
class CustomUserAdmin(UserAdmin):
    list_dispaly = (
        "username",
        "email",
        "created_at",
        "updated_at",
    )

    inlines = (UserInline,)

    fieldsets = (
        (
            "유저 추가 정보",
            {
                "fields": (
                    "avatar",
                    "bio",
                    "gender",
                ),
            },
        ),
    ) + UserAdmin.fieldsets

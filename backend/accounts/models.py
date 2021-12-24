import datetime
from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.


class User(AbstractUser):

    GENDER_MALE = "남"
    GENDER_FEAMIL = "여"
    GENDER_CHOICES = (
        (GENDER_MALE, "남자"),
        (GENDER_FEAMIL, "여자"),
    )

    email = models.EmailField(max_length=255)
    bio = models.TextField(max_length=255, blank=True)
    avatar = models.ImageField(
        upload_to="user_profile/%Y/%m/%d", blank=True, help_text="너무 큰 사진은 올릴 수 없습니다."
    )
    gender = models.CharField(choices=GENDER_CHOICES, max_length=2)
    email_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

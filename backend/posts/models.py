from django.db import models
from accounts.models import User

# Create your models here.


class TimeStampModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Post(TimeStampModel):

    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    photo = models.ImageField(upload_to="posts/%Y/%m/%d")
    desc = models.TextField()
    tags = models.ManyToManyField("Tag", related_name="posts", blank=True)
    location = models.CharField(max_length=100)
    like_user_set = models.ManyToManyField(
        User, related_name="like_post_set", blank=True
    )

    class Meta:
        verbose_name = "게시글"
        ordering = ["created_at"]

    def __str__(self):
        return self.title


class Tag(TimeStampModel):
    name = models.CharField(max_length=10)

    class Meta:
        verbose_name = "태그"
        ordering = ["created_at"]

    def __str__(self):
        return self.name

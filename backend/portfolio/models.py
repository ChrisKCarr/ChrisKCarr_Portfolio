from django.db import models

# Create your models here.
class Post(models.Model):
    author = models.CharField(max_length=60)
    title = models.CharField(max_length=100)
    image = models.ImageField(max_length=100)
    body = models.CharField(max_length=400)
    
    def __str__(self):
        return self.body
    
class Comment(models.Model):
    author = models.CharField(max_length=60)
    body = models.CharField(max_length=400)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comment')
    
    def __str__(self):
        return self.body
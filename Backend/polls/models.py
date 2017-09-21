from django.db import models


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
        return self.question_text

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)



class Projection(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null = True)
    description = models.CharField(max_length=2000)
    personality = models.CharField(max_length=2000)
    credit = models.CharField(max_length=2000, null = True)
    creditURL = models.CharField(max_length=2000, null = True)
    image_path = models.CharField(max_length=2000, null = True)
    votes = models.IntegerField(default=0)
    def __str__(self):
        return self.name
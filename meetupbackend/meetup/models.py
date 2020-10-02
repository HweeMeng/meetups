from django.db import models

# Create your models here.
class Meetup(models.Model):
  meetup = models.CharField(max_length=120)
  description = models.TextField()

  def __str__(self):
    return self.meetup

class Attendees(models.Model):
    name = models.CharField(max_length=100)
    plus_one = models.BooleanField(default=False)
    plus_half = models.BooleanField(default=False)
    meetup = models.ForeignKey(Meetup, related_name='attendees', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Available(models.Model):
    date = models.DateField()
    meal = models.CharField(max_length=100)
    person = models.ForeignKey(Attendees, related_name='dates', on_delete=models.CASCADE)

    def __str__(self):
        return '%s - %s' % (self.date, self.meal)
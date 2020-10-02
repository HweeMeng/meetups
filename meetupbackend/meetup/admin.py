from django.contrib import admin
from .models import Meetup
from .models import Attendees
from .models import Available

# Register your models here.
class MeetupAdmin(admin.ModelAdmin):
  list_display = ('meetup', 'description')

class AttendeesAdmin(admin.ModelAdmin):
  list_display = ('name', 'plus_one','plus_half','meetup')

class AvailableAdmin(admin.ModelAdmin):
  list_display = ('date', 'meal', 'person')

# Register your models here.
admin.site.register(Meetup, MeetupAdmin)

admin.site.register(Attendees, AttendeesAdmin)

admin.site.register(Available, AvailableAdmin)
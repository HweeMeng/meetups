from rest_framework import serializers
from .models import Meetup
from .models import Attendees
from .models import Available

class MeetupSerializer(serializers.ModelSerializer):
    attendees = serializers.StringRelatedField(many=True)

    class Meta:
        model = Meetup
        fields = ('id', 'meetup', 'description','attendees')

class AttendeesSerializer(serializers.ModelSerializer):
    dates = serializers.StringRelatedField(many=True)
    
    class Meta:
        model = Attendees
        fields = ('id', 'name', 'plus_one', 'plus_half', 'meetup', 'dates')

class AvailableSerializer(serializers.ModelSerializer):
  class Meta:
    model = Available
    fields = ('id', 'date', 'meal', 'person')
from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import MeetupSerializer, AttendeesSerializer, AvailableSerializer      # add this
from .models import Meetup, Attendees, Available             # add this

class MeetupView(viewsets.ModelViewSet):       # add this
  serializer_class = MeetupSerializer          # add this
  queryset = Meetup.objects.all()              # add this
  
class AttendeesView(viewsets.ModelViewSet):       # add this
  serializer_class = AttendeesSerializer          # add this
  queryset = Attendees.objects.all()              # add this

class AvailableView(viewsets.ModelViewSet):       # add this
  serializer_class = AvailableSerializer          # add this
  queryset = Available.objects.all()              # add this

class MeetupAttView(viewsets.ModelViewSet):       # add this
  serializer_class = AttendeesSerializer          # add this
  queryset = Attendees.objects.filter(meetup__id='1')              # add this
  
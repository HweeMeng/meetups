from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import MeetupSerializer      # add this
from .serializers import AttendeesSerializer      # add this
from .serializers import AvailableSerializer      # add this
from .models import Meetup                     # add this
from .models import Attendees
from .models import Available

class MeetupView(viewsets.ModelViewSet):       # add this
  serializer_class = MeetupSerializer          # add this
  queryset = Meetup.objects.all()              # add this
  
class AttendeesView(viewsets.ModelViewSet):       # add this
  serializer_class = AttendeesSerializer          # add this
  queryset = Attendees.objects.all()              # add this

class AvailableView(viewsets.ModelViewSet):       # add this
  serializer_class = AvailableSerializer          # add this
  queryset = Available.objects.all()              # add this
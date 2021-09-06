from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class HelloWorld(APIView):
    """dummy api for testing purposes :)"""

    def get(self, request, format=None):
        """
        Return Hello World!
        """
        response = "Hello World!"
        return Response(response)
        

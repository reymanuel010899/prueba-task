from django.conf import settings
from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework.views import APIView
from taskproject.tasks import  send_email_tasks
from .models import TaskModel
from .serializers import TaskSerializers
from rest_framework.response import Response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema


import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
# Create your views here

class TaskList(ListAPIView):
    # list a task
    serializer_class = TaskSerializers
    @swagger_auto_schema(
        operation_summary="Obtener tarea",
        operation_description="Listams todas las tareas",
        responses={200: 'Éxito', 400: 'Error de solicitud'},
    )
    def get_queryset(self):
        return TaskModel.objects.all()
    


class TaskCreate(APIView):
    # create a task
    @swagger_auto_schema(
        operation_summary="creamOs tarea",
        operation_description="Esta vista crear tareas",
        responses={201: 'Éxito', 400: 'Error de solicitud'},
    )
    def post(self, request, *args, **kwargs):
        title = request.data.get('title')
        gmail = request.data.get('gmail')
        description = request.data.get('description')
        instance = TaskModel.objects.create(title=title, gmail=gmail, description=description)
        instance.save()
        kwargs['subject'] = 'You have just successfully created a task'
        kwargs['message'] = description
        kwargs['from_email'] = settings.EMAIL_HOST_USER
        kwargs['recipient_list'] = [request.data.get('gmail')]
        try:
            send_email_tasks(kwargs)
        except Exception as e:  # Catch the exception and assign it to 'e'
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({}, status=status.HTTP_201_CREATED)


class TaskDetail(RetrieveAPIView):
    serializer_class = TaskSerializers
    queryset = TaskModel.objects.all()

    @swagger_auto_schema(
        operation_summary="detalle tareas",
        operation_description="Esta vista detalla tarea",
        responses={200: 'Éxito', 400: 'Error de solicitud'},
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class TaskUpdate(APIView):
    serializer_class = TaskSerializers

    @swagger_auto_schema(
        operation_summary="Atualiza tarea",
        operation_description="Esta vista actualiza tareas",
        responses={200: 'Éxito', 400: 'Error de solicitud'},
    )
    def put(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        instance = TaskModel.objects.get(id=pk)
        instance.title = request.data.get('title')
        instance.gmail = request.data.get('gmail')
        instance.description = request.data.get('description')
        instance.save()
        kwargs['subject'] = 'You have just successfully udated the task'
        kwargs['message'] = request.data.get('description')
        kwargs['from_email'] = settings.EMAIL_HOST_USER
        kwargs['recipient_list'] = [request.data.get('gmail'),]
        try:
            send_email_tasks(kwargs)
        except Exception as e:  # Catch the exception and assign it to 'e'
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
        return Response({}, status=status.HTTP_200_OK)


class TaskDelete(APIView):
    @swagger_auto_schema(
        operation_summary="Elimina tarea",
        operation_description="Listams todas las tareas",
        responses={200: 'Éxito', 400: 'Error de solicitud'},
    )
    def delete(self, request,  *args, **kwargs):
        pk = kwargs.get('pk')
        instance = TaskModel.objects.get(id=pk)
        instance.delete()
        return Response({}, status=status.HTTP_200_OK)


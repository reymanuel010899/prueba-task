from celery import shared_task
from time import sleep
from django.core.mail import send_mail
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from django.conf import settings

@shared_task
def sleep_task(time):
    sleep(time)
    return None

@shared_task
def send_email_tasks(kwargs):
    sleep(1)
    message = MIMEMultipart("alternative")
    text = f"""\
        <br>{kwargs['subject']}.<br>
        <br>{kwargs['message']}.<br>
       """
    
    html = f"""
        <html>
        <body>
            <p>Hola,
            <br>{kwargs['subject']}.<br>
            <br>{kwargs['message']}.<br>
       
            </p>
        </body>
        </html>
        """
    try:
        part1 = MIMEText(text, "plain")
        part2 = MIMEText(html, "html")
        # Adjuntar las partes al mensaje
        message.attach(part1)
        message.attach(part2)
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()  # Usar TLS (Transport Layer Security)
        server.login(settings.EMAIL_HOST_USER, settings.EMAIL_HOST_PASSWORD)  # Iniciar sesión
        server.sendmail(settings.EMAIL_HOST_USER, kwargs['recipient_list'], message.as_string())
    except Exception as e:  # Catch the exception and assign it to 'e'
        print(e)

    return None
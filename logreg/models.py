from django.db import models

from django.contrib.auth.models import AbstractUser

class user(AbstractUser):
    
    confirm_pass=models.CharField(max_length=30)
    organization_name=models.CharField(max_length=30)
    Phone = models.CharField(max_length=30)
    securityquestion=models.CharField(max_length=30)
    answer=models.CharField(max_length=30)


class Employee(models.Model):
    
    joining_date=models.CharField(max_length=30)
    EmpName=models.CharField(max_length=30)
    Salary=models.CharField(max_length=30)
    Duty_time=models.CharField(max_length=30)
    Role = models.CharField(max_length=30)
    Password=models.CharField(max_length=30)


   


class Product(models.Model):
    
   Product_name=models.CharField(max_length=30)
   Product_price=models.IntegerField()
   Quantity=models.IntegerField()


class threshold(models.Model):
     Threshold=models.IntegerField()



class salesdata (models.Model):
    OrderID = models.CharField(max_length=30)
    Product = models.CharField(max_length=30)
    Quantity = models.CharField(max_length=30)
    PriceEach = models.CharField(max_length=30)
    OrderDate = models.CharField(max_length=30)
    PurchaseAddress=models.CharField(max_length=30)


class month(models.Model):
    month=models.CharField(max_length=30)

class datemon(models.Model):
    datemonth=models.CharField(max_length=30)
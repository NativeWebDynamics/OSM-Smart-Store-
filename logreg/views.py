
from typing import final
from matplotlib import pylab
from sklearn.ensemble import  RandomForestRegressor
from pylab import *
import PIL, PIL.Image

from io import StringIO
from asyncio.windows_events import NULL
from ftplib import parse227
import urllib
from django.db import DatabaseError
from django.http import HttpRequest, HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect, render
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.hashers import make_password
from matplotlib.cbook import print_cycles
from matplotlib.pyplot import flag
import datetime  as dt
from datetime import datetime


from numpy import pad
from .models import Employee
from .models import Product
from .models import user
from. models import threshold
from.models import salesdata
from. models import month
from.models import datemon
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
import re
import matplotlib.pyplot as plt
import matplotlib.pyplot as plt1
# Create your views here.



   



def user_login(request):
  if not request.user.is_authenticated:
      if request.method=="POST":

       
      
        uname=request.POST['login']
        upass=(request.POST['password'])
        
        # uid=pi.id
        # request.session['name']=uname
        
            
      
        print(uname)
        print(upass)
        User=authenticate(username=uname , password= upass)
        if User is not None:
          login(request,User)
          messages.success(request,'Logged in Successfully !!')
          return HttpResponseRedirect('/home/')

        else:
          return HttpResponseRedirect('/login/')
          
      
      return render(request,'enroll/userlogin.html',{"msg":"Invalid credentials"})
  else:
    return HttpResponseRedirect('/home/')
  
  
    
  

 


# @cache_control(no_cache=True, must_revalidate=True, no_store=True)
def user_home(request):
  
  if request.user.is_authenticated:
        current_user = request.user
        print (current_user.id)
        uid=current_user.id
        request.session['id']=uid
        thres=threshold.objects.all()
        for thrs in thres:
         a=thrs.Threshold
         print(a)
        prod1=Product.objects.all()
        stud=Employee.objects.all()
      
        c="blue"
        p_df = pd.DataFrame(list(salesdata.objects.all().values('OrderID', 'Product','Quantity','PriceEach','OrderDate','PurchaseAddress' )))
        p_df.dropna(inplace=True)
    
        p_df['Quantity']=pd.to_numeric(p_df['Quantity'])
        p_df['Price Each']=pd.to_numeric(p_df['PriceEach'])
        p_df['sales']=p_df['Quantity']*p_df['PriceEach']
        p_df['date']=pd.to_datetime(p_df['OrderDate'])
        p_df['month']=p_df['date'].dt.month
        p_df['year']=p_df['date'].dt.year
        p_df['city']=p_df['PurchaseAddress'].apply(lambda x: f"{x.split(',')[1]}({x.split(',')[2].split()[0]})")
        p_df['hour']=p_df['date'].dt.hour
        p_df['sdate']=p_df['OrderDate'].apply(lambda x: f"{x.split('/')[1]}")
        p_df['sdate']=pd.to_numeric(p_df['sdate'])
        p_df.sort_values("month", inplace = True)
        month=[key for key,df in p_df.groupby('month')]
        plt.bar(month,p_df.groupby('month').sum()['sales'],color = c)
        plt.xlabel('Month')
        plt.ylabel('sales' )
        plt.yticks(p_df.groupby('month').sum()['sales'],fontsize = 5)
        plt.xticks(month)
        y="logreg\static\images\graphs\graph2.jpeg"
        plt.savefig(y)
        plt.close()
      


        city=[key for key,df in p_df.groupby('city')]
        plt1.bar(city,p_df.groupby('city').sum()['sales'],color = c)
        plt1.xlabel('city')
        plt1.ylabel('sales')
        plt1.yticks(p_df.groupby('city').sum()['sales'])
        plt1.xticks(city,rotation=90,size=10)
        v="logreg\static\images\citygraph\graphcity.png"
        plt1.savefig(v)
        plt1.close()
        dt = datetime.now()
        m=dt.month
        d=dt.day
        md=p_df[(p_df['month']==m) & (p_df['sdate']==d)] #for month and date
        o=md.sales.sum()  #total monthly sale
        t = "{:.2f}".format(o)

        prod=md.groupby(['Product'],as_index=False)[['Quantity']].sum().max()#month with date
        
        print(dt.month)
        print(dt.day)
        
        return render (request,'enroll/home.html',{'name':request.user,'stu':stud,'prod':prod1,'lim':a,'ms':t,'ht':prod})

  else:
     return HttpResponseRedirect('/login/')
   
    

def user_logout(request):
  
  logout(request)
  return HttpResponseRedirect('/login')



def sign_up(request):
    if request.method=="POST":
        data=user()
        data.username=request.POST.get('username')
        data.Phone=request.POST.get('PhoneNumber')
        data.email=request.POST.get('emailaddress')
        data.organization_name= On=request.POST.get('Organization-Name')
        data.password=make_password(request.POST.get('password'))
        data.confirm_pass=request.POST.get('passwordConfirm')
        data.securityquestion=request.POST.get('selectitem')
        data.answer=request.POST.get('answer')
        data.save()
        
      
    return render(request,'enroll/signup.html')
     
      
    


def user_recover(request):
   
    if request.method=="POST":
        nam=request.POST.get('Npas')
        o=request.POST.get('org')

        p=user.objects.get(username=nam)
        print(p.id)
        request.session['id'] = p.id
        if user.objects.filter(username=nam).exists() and user.objects.filter(organization_name=o).exists():
          return HttpResponseRedirect('/sque/',)

        else:
          return HttpResponseRedirect('/recover/')

  
    return render (request,'enroll/recover.html')
    
    

    
    
     
 
   
       
     
def sqcheck(request):
  idsq = request.session['id']
  p=user.objects.get(id=idsq)
  b=p.securityquestion
  if request.method=="POST":
    ans=request.POST.get('secQ')

    if p.answer == ans:
      return HttpResponseRedirect('/changecred/')
    else:
      return HttpResponseRedirect('/sque/')
      
      

  
  
  return render(request,'enroll/sq.html',{'sq':b})
        
    
  

def change_cred(request):
  if request.method=="POST":
     passw=make_password(request.POST.get('Npas'))
     cp=request.POST.get('CNpas')
     cid=request.session['id']
     user.objects.filter(id = cid).update(password = passw)
     user.objects.filter(id = cid).update(confirm_pass = cp)


  return render(request,'enroll/cred_change.html')



def emp(Request):
  if Request.user.is_authenticated:
    if Request.method=="POST":
        data1=Employee()
        data1.joining_date=Request.POST.get('emp-date')
        data1.EmpName=Request.POST.get('emp-name')
        data1.Salary=Request.POST.get('num')
        data1.Duty_time=Request.POST.get('dutyTime')
        data1.Role=Request.POST.get('role')
        data1.Password=Request.POST.get('emp-password')
        
        data1.save()
    stud=Employee.objects.all()
    return render(Request , "enroll/employee.html",{'stu':stud})
  else:
     return HttpResponseRedirect('/login/')
  


def delete_data(request,id):
    if request.method=='POST':
      print(id)
      pi=Employee.objects.get(pk=id)
      pi.delete()  
    return HttpResponseRedirect('/emp/')
        
          
            
            




def salespre(request):
  if request.user.is_authenticated:
    if request.method=="POST":
      pno=request.POST['Id-input']
      mon=request.POST['Month-input']
      year=request.POST['Year-input']
      print(pno)
      print(mon)
      print(year)
    else:
     return render(request,'enroll/salepre.html')

    df = pd.DataFrame(list(salesdata.objects.all().values('OrderID', 'Product','Quantity','PriceEach','OrderDate','PurchaseAddress' )))
    
    df["Product"].replace({"USB-C Charging Cable": 1, "Macbook Pro Laptop": 2,"ThinkPad Laptop": 3,
                             "27in FHD Monitor": 4,"Bose SoundSport Headphones": 5,"Apple Airpods Headphones": 6,
                             "Lightning Charging Cable":7 , "Wired Headphones": 8,"Flatscreen TV": 9,
                             "AA Batteries (4-pack)": 10,"AAA Batteries (4-pack)":11,"34in Ultrawide Monitor":12,
                            "iPhone":13 , "Google Phone":14,"27in 4K Gaming Monitor": 15,
                             "20in Monitor": 16,"LG Dryer":17,"Vareebadd Phone":18,
                             "LG Washing Machine":19, }, inplace=True)
    
    print(df.isnull().sum())
    df=df[df['Quantity']!='Quantity']
    df['Quantity']=pd.to_numeric(df['Quantity'])
    df['PriceEach']=pd.to_numeric(df['PriceEach'])
    df['sales']=df['Quantity']*df['PriceEach']
    df['date']=pd.to_datetime(df['OrderDate'])
    df['month']=df['date'].dt.month
    df['year']=df['date'].dt.year
    df.head()
    df['city']=df['PurchaseAddress'].apply(lambda x: f"{x.split(',')[1]}({x.split(',')[2].split()[0]})")

    df.head(20)
    df['hour']=df['date'].dt.hour
    df['sdate']=df['OrderDate'].apply(lambda x: f"{x.split('/')[1]}")
    X=df.drop(columns=['OrderID','Quantity','PriceEach','OrderDate','PurchaseAddress','Product','sales','year','date','city','hour'])
    y=df.drop(columns=['OrderID','Quantity','PriceEach','OrderDate','PurchaseAddress','date','Product','sdate','month','year','city','hour'])
    Xx_train, Xx_test, yy_train, yy_test = train_test_split(df[['Product', 'month', 'year']],df['sales'], test_size=0.25, random_state=42)
    DTR = RandomForestRegressor(max_depth=3, random_state=4)
    DTR.fit(Xx_train, yy_train)
    sco=DTR.score(Xx_test, yy_test)
    pre=DTR.predict([[pno,mon,year]])
    print(type(pre))
    s=pre[0]
    pr = "{:.2f}".format(s)
    sc = "{:.2f}".format(sco)
   
    
    return render(request,'enroll/salepre.html',{'score':sc,'pre':pr})
  else:
    return HttpResponseRedirect('/login/')
     

   



      


def empup(request,id):
  cid=id
  if request.method=="POST":
      nam2 = request.POST.get('emp-name',False)
      sal2= request.POST.get('emp-salary',False)
      dt2= request.POST.get('dutyTime',False)
      ro2= request.POST.get('dutyRole',False)
      jt2= request.POST.get('emp-date',False)
      pas2=request.POST.get('emp-password',False)
      print(nam2,sal2,dt2,ro2,jt2,pas2)
      Employee.objects.filter(id =cid ).update(EmpName =nam2,joining_date=jt2,Salary=sal2,Duty_time=dt2,Role=ro2, Password=pas2)
      return render(request,'enroll/empup.html')

  pi=Employee.objects.get(pk=id)
  name=pi. EmpName
  Salary=pi.Salary
  dt=pi.Duty_time
  ro=pi.Role
  pas=pi.Password
  jt=pi.joining_date
  return render(request,'enroll/empup.html',{'id':id,'nam':name,'sal':Salary,'dt':dt,'ro':ro,'pas':pas,'jt':jt})
      


def stockad(Request):
  if Request.user.is_authenticated:
    if Request.method=="POST":
      data=Product()
      data.Product_name=Request.POST.get('product-name')
      data.Product_price=Request.POST.get('product-price')
      data.Quantity=Request.POST.get('product-Quantity')
      data.save()
    prod=Product.objects.all() 
    return render(Request,'enroll/stocks.html',{'prod':prod})
  else:
    return HttpResponseRedirect('/login/')
    


def delete_datprod(request,id):
    if request.method=='POST':
      print(id)
      pi=Product.objects.get(pk=id)
      pi.delete()  
      return HttpResponseRedirect('/stocks/')




def stockup(request,id):
  cid=id
  if request.method=="POST":
      nam = request.POST.get('product-name',False)
      pric = request.POST.get('product-price',False)
      qua= request.POST.get('product-Quantity',False)
      print(nam,qua,pric)
      Product.objects.filter(id =cid ).update(Product_name =nam,Product_price=pric,Quantity=qua)

 
  pi=Product.objects.get(pk=id)
  name=pi. Product_name
  price=pi.Product_price
  quantity=pi.Quantity
  return render(request,'enroll/Stockupdate.html',{'id':id,'nam':name,'quan':quantity,'price':price})
      

def settings(request):
  if request.user.is_authenticated:
    if request.method=="POST":
      trh = request.POST.get('threshold-input',False)
      threshold.objects.filter(id =1 ).update( Threshold=trh)


    thres=threshold.objects.all()
    for thrs in thres:
      a=thrs.Threshold
        
    uid=request.session['id']
    
    print(uid)
    obj = user.objects.get(pk=uid)
    print(obj)
    b=obj.securityquestion
    b1=obj.organization_name
    b2=obj.Phone
    b3=obj.username
    b4=obj.email
    
    return render(request,'enroll/settings.html',{'thrs':a,'org':b1,'ph':b2,'user':b3,'em':b4})
  else:
   return HttpResponseRedirect('/login/')




def repo(request):
    if request.method=="POST":
     Dat=month()
     Dat2=datemon()

     Dat.month=request.POST.get('Month-input',"")
     Dat2.datemonth=request.POST.get('date-input',"")
     c=len(Dat2.datemonth)
     print("leng mon + date", c)
     b=len(Dat.month)
    #  print (b)
     if b==1 or b==2:
      
       Dat.save()
       return HttpResponseRedirect('/mreport/')
     if c>1 and c>2:
       Dat2.save()
       return HttpResponseRedirect('/dmreport/')
     
      
      
    

     
    
     
     
    
     
    return render(request,'enroll/reportf.html')


def mreport(request):
  if request.user.is_authenticated:
    mon=month.objects.all()
    for mo in mon:
      a=mo.month
      print("in month repo",a)
      b=int(a)
          
    # mone=request.session['mone']
    
    # print("this from month", mone,"this mon")
    # st=int(mon)
 
    # del request.session['mon']
    # mon=NULL
    # print(type(st))
  
    p_df = pd.DataFrame(list(salesdata.objects.all().values('OrderID', 'Product','Quantity','PriceEach','OrderDate','PurchaseAddress' )))
    p_df.dropna(inplace=True)
  
    p_df['Quantity']=pd.to_numeric(p_df['Quantity'])
    p_df['Price Each']=pd.to_numeric(p_df['PriceEach'])
    p_df['sales']=p_df['Quantity']*p_df['PriceEach']
    p_df['date']=pd.to_datetime(p_df['OrderDate'])
    p_df['month']=p_df['date'].dt.month
    p_df['year']=p_df['date'].dt.year
    p_df['city']=p_df['PurchaseAddress'].apply(lambda x: f"{x.split(',')[1]}({x.split(',')[2].split()[0]})")
    p_df['hour']=p_df['date'].dt.hour
    p_df['sdate']=p_df['OrderDate'].apply(lambda x: f"{x.split('/')[1]}")
    p_df['sdate']=pd.to_numeric(p_df['sdate'])
    p_df.sort_values("month", inplace = True)
    #for months

    mm=p_df[(p_df['month']==b)] #only for months
    sl=p_df.groupby('month').sum()['sales'] #sales in all months
    prods=mm.groupby(['Product'],as_index=False)[['Quantity','sales']].sum() #product+sales
    prcity=mm.groupby(['city','Product'],as_index=False)[['Quantity']].sum()#city wise sales
    prod=mm.groupby(['Product'],as_index=False)[['Quantity']].sum().max()#monthly hot product
    p=mm.sales.sum() 
    # print(prod)
    # print(prods)
    # print(prcity)
    # print(p)
    dfs = sl.convert_dtypes()
    dfp=prods.convert_dtypes()
    dfc=prcity.convert_dtypes()
    # dp=p.convert_dtypes()

    print(p)
    
    # f=prod.Quantity
    # j=  prod.Quantity
    
    month.objects.all().delete()
    # print(dfs.get(1))
    return render(request,'enroll/monthlyrepo.html',context={'s1':dfs , 's2':dfp,'s3':dfc,'s4':prod,'s5':p})
  else:
    return HttpResponseRedirect('/login/')
   





def dmreport(request):
 dmo=datemon.objects.all()
 for dm in dmo:
    a=dm.datemonth
    print("in month date repo",a)
    datem = dt.datetime.strptime(a, "%Y-%m-%d")
    # print(datem.day)        
    # print(datem.month)
    
    p_df = pd.DataFrame(list(salesdata.objects.all().values('OrderID', 'Product','Quantity','PriceEach','OrderDate','PurchaseAddress' )))
    p_df.dropna(inplace=True)
 
    p_df['Quantity']=pd.to_numeric(p_df['Quantity'])
    p_df['Price Each']=pd.to_numeric(p_df['PriceEach'])
    p_df['sales']=p_df['Quantity']*p_df['PriceEach']
    p_df['date']=pd.to_datetime(p_df['OrderDate'])
    p_df['month']=p_df['date'].dt.month
    p_df['year']=p_df['date'].dt.year
    p_df['city']=p_df['PurchaseAddress'].apply(lambda x: f"{x.split(',')[1]}({x.split(',')[2].split()[0]})")
    p_df['hour']=p_df['date'].dt.hour
    p_df['sdate']=p_df['OrderDate'].apply(lambda x: f"{x.split('/')[1]}")
    p_df['sdate']=pd.to_numeric(p_df['sdate'])
    p_df.sort_values("month", inplace = True)
    #for month + date
    md=p_df[(p_df['month']==datem.month) & (p_df['sdate']==datem.day)] 
    prods=md.groupby(['Product'],as_index=False)[['Quantity','sales']].sum() #product+sales
    prcity=md.groupby(['city','Product'],as_index=False)[['Quantity']].sum()#city wise sales
    prod=md.groupby(['Product'],as_index=False)[['Quantity']].sum().max()#daily hot product
    p=md.sales.sum() 
    dfp=prods.convert_dtypes()
    dfc=prcity.convert_dtypes()
    # dp=p.convert_dtypes()

    print(p)
    
    # print(prod)
    # print(prods)
    # print(prcity)
    # print(p)

    datemon.objects.all().delete()

    return render(request,'enroll/monthdaterepo.html',{'s4':prod,'s3':dfc,'s2':dfp,'s5':p})




  

def profileupdate(Request):
  
  uid=Request.session['id']
  obj = user.objects.get(pk=uid)
  print(obj)
  b=obj.securityquestion
  b1=obj.organization_name
  b2=obj.Phone
  b3=obj.username
  b4=obj.email
  n=obj.id


  if Request.method=="POST":
        us=Request.POST.get('UserName')
        ph=Request.POST.get('PhoneNumber')
        em=Request.POST.get('emailaddress')
        org=Request.POST.get('Organization-Name')
        p=make_password(Request.POST.get('password-id'))
        cp=Request.POST.get('passwordConfirm')
        sq=Request.POST.get('selectitem')
        an=Request.POST.get('answer')
        user.objects.filter(id =n).update(username =us,email=em,confirm_pass=cp,organization_name=org,Phone=ph, securityquestion=sq, answer=an,password=p)



  
    
  return render(Request,'enroll/userprofileupdate.html',{'nam':b3,'ema':b4,'orgn':b1,'ph':b2})


  

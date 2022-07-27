"""FYP URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from logreg import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/', views.sign_up,name='signup'),
    path('login/', views.user_login,name='login'),
    path('home/', views.user_home,name='home'),
    path('salespre/',views.salespre,name='salepre'),
    path('logout/', views.user_logout,name='logout'),
    path('recover/', views.user_recover,name='recover'),
    path('changecred/', views.change_cred,name='changecred'),
    path('emp/', views.emp , name='emp'),
    path('stocks/',views.stockad,name='stock'),
    path('empup/<int:id>',views.empup,name='empup'),
    path('delete/<int:id>',views.delete_data,name='deletedata'),
    path('stockup/<int:id>',views.stockup,name='stockup'),
    path('deletestock/<int:id>',views.delete_datprod,name='deleteprod'),
    path('settings/',views.settings,name='setting'),
    path('profileupdate/', views.profileupdate,name='profup'),
    path('mreport/', views.mreport,name='mreport'),
     path('dmreport/', views.dmreport,name='dmreport'),
    path('sque/', views.sqcheck,name='sq'),
    path('repo/', views.repo,name='repo'),

    
   

    
]

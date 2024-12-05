from django.db import models

# Create your models here.
class EBook(models.Model):
    book_name=models.CharField(max_length=150)
    author=models.CharField(max_length=50)
    publisher=models.CharField(max_length=150)
    publish_date=models.DateField()
    language=models.CharField(max_length=50)
    keywords=models.CharField(max_length=200)
    description=models.CharField(max_length=300)
    total_pages=models.CharField(max_length=100)
    image=models.FileField(upload_to='static/uploads')
    rating=models.DecimalField(max_digits=8,decimal_places=2,null=True,blank=True)
    reviews=models.IntegerField(null=True,blank=True,default=0)

    def __str__(self):
        return self.book_name
    
# class KidsBook(models.Model):
#     book_name=models.CharField(max_length=150)
#     author=models.CharField(max_length=50)
#     publisher=models.CharField(max_length=150)
#     publish_date=models.DateField()
#     language=models.CharField(max_length=50)
#     keywords=models.CharField(max_length=200)
#     description=models.CharField(max_length=300)
#     total_pages=models.CharField(max_length=100)
#     image=models.FileField(upload_to='static/uploads')
#     rating=models.DecimalField(max_digits=8,decimal_places=2,null=True,blank=True)
#     reviews=models.IntegerField(null=True,blank=True,default=0)

#     def __str__(self):
#         return self.book_name
    

# class ClassicBooks(models.Model):
#     book_name=models.CharField(max_length=150)
#     author=models.CharField(max_length=50)
#     publisher=models.CharField(max_length=150)
#     publish_date=models.DateField()
#     language=models.CharField(max_length=50)
#     keywords=models.CharField(max_length=200)
#     description=models.CharField(max_length=300)
#     total_pages=models.CharField(max_length=100)
#     image=models.FileField(upload_to='static/uploads')
#     rating=models.DecimalField(max_digits=8,decimal_places=2,null=True,blank=True)
#     reviews=models.IntegerField(null=True,blank=True,default=0)

#     def __str__(self):
#         return self.book_name
    

# class RomanceBook(models.Model):
#     book_name=models.CharField(max_length=150)
#     author=models.CharField(max_length=50)
#     publisher=models.CharField(max_length=150)
#     publish_date=models.DateField()
#     language=models.CharField(max_length=50)
#     keywords=models.CharField(max_length=200)
#     description=models.CharField(max_length=300)
#     total_pages=models.CharField(max_length=100)
#     image=models.FileField(upload_to='static/uploads')
#     rating=models.DecimalField(max_digits=8,decimal_places=2,null=True,blank=True)
#     reviews=models.IntegerField(null=True,blank=True,default=0)

#     def __str__(self):
#         return self.book_name
    

# class ThrillersBook(models.Model):
#     book_name=models.CharField(max_length=150)
#     author=models.CharField(max_length=50)
#     publisher=models.CharField(max_length=150)
#     publish_date=models.DateField()
#     language=models.CharField(max_length=50)
#     keywords=models.CharField(max_length=200)
#     description=models.CharField(max_length=300)
#     total_pages=models.CharField(max_length=100)
#     image=models.FileField(upload_to='static/uploads')
#     rating=models.DecimalField(max_digits=8,decimal_places=2,null=True,blank=True)
#     reviews=models.IntegerField(null=True,blank=True,default=0)

#     def __str__(self):
#         return self.book_name

# class AdventureFiction(models.Model):
#     book_name=models.CharField(max_length=150)
#     author=models.CharField(max_length=50)
#     publisher=models.CharField(max_length=150)
#     publish_date=models.DateField()
#     language=models.CharField(max_length=50)
#     keywords=models.CharField(max_length=200)
#     description=models.CharField(max_length=300)
#     total_pages=models.CharField(max_length=100)
#     image=models.FileField(upload_to='static/uploads')
#     rating=models.DecimalField(max_digits=8,decimal_places=2,null=True,blank=True)
#     reviews=models.IntegerField(null=True,blank=True,default=0)

#     def __str__(self):
#         return self.book_name
    



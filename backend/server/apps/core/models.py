from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django_countries.fields import CountryField
from django.template.defaultfilters import slugify


CATEGORY_CHOICES = (("S", "Shirt"), ("SW", "Sport wear"), ("OW", "Outwear"))

COUNRTY_CHOICES = (("UK", "UK"), ("US", "US"), ("EU", "EU"), ("RU", "RU"))

TYPE_CHOICES = (("B", "Brand"),)

LABEL_CHOICES = (("P", "primary"), ("S", "secondary"), ("D", "danger"))

ADDRESS_CHOICES = (
    ("B", "Billing"),
    ("S", "Shipping"),
)


class Vendor(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # stripe_customer_id = models.CharField(max_length=50, blank=True, null=True)
    one_click_purchasing = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_profile(sender, instance, created, **kwargs):
    if created:
        user_profile = Vendor(user=instance)
        user_profile.save()


class Category(models.Model):
    parent_category = models.ForeignKey("self", on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100)
    type = models.CharField(
        choices=TYPE_CHOICES, max_length=2, null=True, blank=True, default="B"
    )
    # description = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100)
    sku = models.CharField(max_length=100)
    qty_in_stock = models.IntegerField(default=1)
    year_released = models.IntegerField()
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    slug = models.SlugField()
    image = models.ImageField(upload_to="images")

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super().save(*args, **kwargs)


class ProductImages(models.Model):
    # title = models.CharField(max_length=255)
    # description = models.TextField(verbose_name='Описание', blank=True)
    image = models.ImageField(upload_to="product_images/")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    # def __str__(self):
    #     return self.title

    # class Meta:
    #     verbose_name = 'Кадры из фильма'
    #     verbose_name_plural = 'Кадры из фильма'


# class ProductItem(models.Model):
#     # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     item = models.ForeignKey(Product, on_delete=models.CASCADE)
#     price = models.FloatField()
#     # slug = models.SlugField()
#     discount_price = models.FloatField(blank=True, null=True)
#     quantity = models.IntegerField(default=1)
#     # image = models.ImageField(upload_to="images")
#     # label = models.CharField(choices=LABEL_CHOICES, max_length=1)


class Variation(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)  # size, colour

    # VARIATION_CHOICES = (
    #     ("size", "size"),
    #     ("color", "color"),
    #     ("images", "images"),
    # )
    # change to choices
    # name = models.CharField(choices=VARIATION_CHOICES, default="size", max_length=6)

    class Meta:
        unique_together = ("category", "name")

    def __str__(self):
        return f"{self.name} of {self.category}"


class VariationOption(models.Model):
    variation = models.ForeignKey(Variation, on_delete=models.CASCADE)
    ru_size = models.CharField(max_length=50)
    eu_size = models.CharField(max_length=50)
    uk_size = models.CharField(max_length=50)
    # value = models.CharField(max_length=50)  # S, M, L
    attachment = models.ImageField(blank=True)
    # ДОБАВИТЬ три поля UK, US, EU, вместо value
    # address_type = models.CharField(max_length=3, choices=COUNRTY_CHOICES)
    # item_variations = models.ManyToManyField(ProductItem)

    # class Meta:
    #     unique_together = ("variation", "value")

    def __str__(self):
        # return self.ru_size
        return f"ru size - {self.ru_size}"


class ProductConfiguration(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    variation_option = models.ForeignKey(VariationOption, on_delete=models.CASCADE)
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    price = models.FloatField()
    quantity = models.IntegerField(default=1)
    # quantity = models.IntegerField(default=1)

    # class Meta:
    #     verbose_name = "size"
    #     verbose_name_plural = "size"


# # class Stock(models.Model):
# #     # test = models.BooleanField(default=False, null=True)
# #     pass
# # class OrderItem(Stock):
# class OrderItem(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     ordered = models.BooleanField(default=False)
#     item = models.ForeignKey(Item, on_delete=models.CASCADE)
#     item_variations = models.ManyToManyField(ItemVariation)
#     quantity = models.IntegerField(default=1)

#     def __str__(self):
#         return f"{self.quantity} of {self.item.title}"

#     def get_total_item_price(self):
#         return self.quantity * self.item.price

#     def get_total_discount_item_price(self):
#         return self.quantity * self.item.discount_price

#     def get_amount_saved(self):
#         return self.get_total_item_price() - self.get_total_discount_item_price()

#     def get_final_price(self):
#         if self.item.discount_price:
#             return self.get_total_discount_item_price()
#         return self.get_total_item_price()


# class Order(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     ref_code = models.CharField(max_length=20, blank=True, null=True)
#     items = models.ManyToManyField(OrderItem)
#     start_date = models.DateTimeField(auto_now_add=True)
#     ordered_date = models.DateTimeField()
#     ordered = models.BooleanField(default=False)
#     # shipping_address = models.ForeignKey(
#     #     "Address",
#     #     related_name="shipping_address",
#     #     on_delete=models.SET_NULL,
#     #     blank=True,
#     #     null=True,
#     # )
#     # billing_address = models.ForeignKey(
#     #     "Address",
#     #     related_name="billing_address",
#     #     on_delete=models.SET_NULL,
#     #     blank=True,
#     #     null=True,
#     # )
#     # payment = models.ForeignKey(
#     #     "Payment", on_delete=models.SET_NULL, blank=True, null=True
#     # )
#     coupon = models.ForeignKey(
#         "Coupon", on_delete=models.SET_NULL, blank=True, null=True
#     )
#     # being_delivered = models.BooleanField(default=False)
#     # received = models.BooleanField(default=False)
#     # refund_requested = models.BooleanField(default=False)
#     # refund_granted = models.BooleanField(default=False)

#     """
#     1. Item added to cart
#     2. Adding a billing address
#     (Failed checkout)
#     3. Payment
#     (Preprocessing, processing, packaging etc.)
#     4. Being delivered
#     5. Received
#     6. Refunds
#     """

#     def __str__(self):
#         return self.user.username

#     def get_total(self):
#         total = 0
#         for order_item in self.items.all():
#             total += order_item.get_final_price()
#         if self.coupon:
#             total -= self.coupon.amount
#         return total


# class Address(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     street_address = models.CharField(max_length=100)
#     apartment_address = models.CharField(max_length=100)
#     country = CountryField(multiple=False)
#     zip = models.CharField(max_length=100)
#     address_type = models.CharField(max_length=1, choices=ADDRESS_CHOICES)
#     default = models.BooleanField(default=False)

#     def __str__(self):
#         return self.user.username

#     class Meta:
#         verbose_name_plural = "Addresses"


# class Coupon(models.Model):
#     code = models.CharField(max_length=15)
#     amount = models.FloatField()

#     def __str__(self):
#         return self.code

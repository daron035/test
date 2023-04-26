from django_countries import countries
from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from rest_framework import generics, viewsets
from django.utils import timezone
from django.http import Http404
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.generics import RetrieveAPIView

from .serializers import (
    ProductSerializer,
    ProductDetailSerializer,
    # OrderSerializer,
    # ItemDetailSerializer,
    # AddressSerializer,
)
from .models import (
    Product,
    VariationOption,
    ProductConfiguration,
    Vendor,
    # Item,
    # OrderItem,
    # Order,
    # Coupon,
    # UserProfile,
    # Variation,
    # ItemVariation,
)


# class ItemListView(generics.ListAPIView):
#     permission_classes = (AllowAny,)
#     serializer_class = ItemSerializer
#     queryset = Item.objects.all()


class ProductListView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ProductSerializer
    # queryset = Product.objects.all()

    def get_queryset(self):
        style_codes = self.request.query_params.get("style_codes", None)
        qs = Product.objects.all()
        if style_codes is None:
            return qs
        return qs.filter(sku=style_codes)


class ProductDetailView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    lookup_field = "sku"
    serializer_class = ProductDetailSerializer
    queryset = Product.objects.all()

    # def post(self, request, *args, **kwargs):
    #     sku = request.data.get("sku", None)
    #     print("000000000000000000")
    #     print(sku)
    #     print("111111111111111111")
    #     user = self.request.user
    #     if user:
    #         print(user)


class AddToStockView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user = self.request.user
        details = request.data.get("details", None)
        sku, size, number, price = details.values()
        # print(f"sku - {sku}; size - {size}; number - {number}")
        if user:
            # print(user)
            pr = Product.objects.get(sku=sku)
            # print("111111", p)
            vo = VariationOption.objects.get(id=size)
            # print("222222", v)
            ve = Vendor.objects.get(user=user)
            obj, created = ProductConfiguration.objects.get_or_create(
                product=pr, variation_option=vo, vendor=ve, price=price
            )
            if obj:
                print(obj.product)
            if created:
                print("AKSJFKALSDJFKLASJFDKLASJDF;LASFDASDFJA;KSLJDFAKLSJDFAKSLDFJJK")

            return Response(status=HTTP_200_OK)

        return Response(
            {"message": "You do not have an active order"}, status=HTTP_400_BAD_REQUEST
        )
        # print('34524523452352352345')


# class AddToCartView(APIView):
#     def post(self, request, *args, **kwargs):
#         slug = request.data.get("slug", None)
#         variations = request.data.get("variations", [])
#         print(variations)
#         if slug is None:
#             return Response({"message": "Invalid request"}, status=HTTP_400_BAD_REQUEST)

#         item = get_object_or_404(Item, slug=slug)

#         minimum_variation_count = Variation.objects.filter(item=item).count()
#         if len(variations) < minimum_variation_count:
#             return Response(
#                 {"message": "Please specify the required variations"},
#                 status=HTTP_400_BAD_REQUEST,
#             )

#         order_item_qs = OrderItem.objects.filter(
#             item=item, user=request.user, ordered=False
#         )
#         for v in variations:  # [1,4]
#             order_item_qs = order_item_qs.filter(Q(item_variations__exact=v))

#         if order_item_qs.exists():
#             order_item = order_item_qs.first()
#             order_item.quantity += 1
#             order_item.save()
#         else:
#             order_item = OrderItem.objects.create(
#                 item=item, user=request.user, ordered=False
#             )
#             order_item.item_variations.add(*variations)  # [1,4]
#             order_item.save()

#         order_qs = Order.objects.filter(user=request.user, ordered=False)
#         if order_qs.exists():
#             order = order_qs[0]
#             # check if the order item is in the order
#             # if order.items.filter(item__slug=item.slug).exists():
#             #     order_item_qs.quantity += 1
#             #     order_item_qs.save()
#             #     return Response(status=HTTP_200_OK)
#             # else:
#             #     order.items.add(order_item_qs)
#             #     return Response(status=HTTP_200_OK)
#             if not order.items.filter(item__id=order_item.id).exists():
#                 order.items.add(order_item)
#                 return Response(status=HTTP_200_OK)
#             #
#         else:
#             ordered_date = timezone.now()
#             order = Order.objects.create(user=request.user, ordered_date=ordered_date)
#             order.items.add(order_item)
#             return Response(status=HTTP_200_OK)


# class OrderDetailView(RetrieveAPIView):
#     serializer_class = OrderSerializer
#     permission_classes = (IsAuthenticated,)

#     def get_object(self):
#         try:
#             order = Order.objects.get(user=self.request.user, ordered=False)
#             return order
#         except ObjectDoesNotExist:
#             raise Http404("You do not have an active order")
#             # return Response({"message": "You do not have an active order"}, status=HTTP_400_BAD_REQUEST)


# class PaymentView(APIView):
#     def post(self, request, *args, **kwargs):
#         return Response({"OK"}, status=HTTP_200_OK)


# class AddCouponView(APIView):
#     def post(self, request, *args, **kwargs):
#         code = request.data.get("code", None)
#         if code is None:
#             return Response(
#                 {"message": "Invalid data received"}, status=HTTP_400_BAD_REQUEST
#             )
#         order = Order.objects.get(user=self.request.user, ordered=False)
#         coupon = get_object_or_404(Coupon, code=code)
#         order.coupon = coupon
#         order.save()
#         return Response(status=HTTP_200_OK)

# class CountryListView(APIView):
#     def get(self, request, *args, **kwargs):
#         return Response(countries, status=HTTP_200_OK)

# class AddressListView(generics.ListAPIView):
#     permission_classes = (IsAuthenticated,)
#     # permission_classes = (AllowAny,)
#     serializer_class = AddressSerializer

#     # def get_queryset(self, request):
#     #     return Address.objects.filter(user=request.user)
#     def get_queryset(self):
#         address_type = self.request.query_params.get('address_type', None)
#         qs = Address.objects.all()
#         if address_type is None:
#             return qs
#         return qs.filter(user=self.request.user, address_type=address_type)

# class AddressCreateView(generics.CreateAPIView):
#     permission_classes = (IsAuthenticated,)
#     # permission_classes = (AllowAny,)
#     serializer_class = AddressSerializer
#     queryset = Address.objects.all()

from django_countries.serializer_fields import CountryField
from rest_framework import serializers

# from .models import Address, Item, Order, OrderItem, Coupon, Variation, ItemVariation
from .models import *


# class StringSerializer(serializers.StringRelatedField):
#     def to_internal_value(self, value):
#         return value


# class CouponSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Coupon
#         fields = (
#             "id",
#             "code",
#             "amount",
#         )


# class ItemSerializer(serializers.ModelSerializer):
#     category = serializers.SerializerMethodField()
#     label = serializers.SerializerMethodField()

#     class Meta:
#         model = Item
#         fields = "__all__"
#         # fields = ("id",)

#     def get_category(self, obj):
#         return obj.get_category_display()

#     def get_label(self, obj):
#         return obj.get_label_display()

class CategorySerializer(serializers.ModelSerializer):
    parent_category = serializers.SerializerMethodField()
    type = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ('id', 'name', 'type', 'parent_category',)

    def get_parent_category(self, obj):
        return CategorySerializer(obj.parent_category).data
    # return ItemVarioationDetailSerializer(obj.item_variations.all(), many=True).data

    def get_type(self, obj):
        return obj.get_type_display()

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    class Meta:
        model = Product
        fields = "__all__"


# class VarioationDetailSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Variation
#         fields = ("id", "name")


# class ItemVarioationDetailSerializer(serializers.ModelSerializer):
#     # variation = VarioationDetailSerializer(read_only=True)
#     variation = serializers.SerializerMethodField()

#     class Meta:
#         model = ItemVariation
#         fields = (
#             "id",
#             "variation",
#             "value",
#             "attachment",
#         )

#     def get_variation(self, obj):
#         return VarioationDetailSerializer(obj.variation).data


# class OrderItemSerializer(serializers.ModelSerializer):
#     item = serializers.SerializerMethodField()
#     item_variations = serializers.SerializerMethodField()
#     final_price = serializers.SerializerMethodField()

#     class Meta:
#         model = OrderItem
#         fields = (
#             "id",
#             "item",
#             "item_variations",
#             "quantity",
#             "final_price",
#         )

#     def get_item(self, obj):
#         return ItemSerializer(obj.item).data

#     def get_item_variations(self, obj):
#         return ItemVarioationDetailSerializer(obj.item_variations.all(), many=True).data

#     def get_final_price(self, obj):
#         return obj.get_final_price()


# class OrderSerializer(serializers.ModelSerializer):
#     order_items = serializers.SerializerMethodField()
#     total = serializers.SerializerMethodField()
#     coupon = serializers.SerializerMethodField()
#     # coupon = CouponSerializer(read_only=True)

#     class Meta:
#         model = Order
#         fields = (
#             "id",
#             "order_items",
#             "total",
#             "coupon",
#         )

#     def get_order_items(self, obj):
#         return OrderItemSerializer(obj.items.all(), many=True).data

#     def get_total(self, obj):
#         return obj.get_total()

#     def get_coupon(self, obj):
#         if obj.coupon is not None:
#             return CouponSerializer(obj.coupon).data
#         return None


# class ItemVariationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ItemVariation
#         fields = ["id", "value", "attachment"]


# class VariationSerializer(serializers.ModelSerializer):
#     item_variations = serializers.SerializerMethodField()

#     class Meta:
#         model = Variation
#         fields = ["id", "name", "item_variations"]

#     def get_item_variations(self, obj):
#         return ItemVariationSerializer(obj.itemvariation_set.all(), many=True).data

class ProductDetailSerializer(serializers.ModelSerializer):
    # category = CategorySerializer(read_only=True)
    class Meta:
        model = Product
        fields = ("id", "name", "year_released", "sku", "image")
        # fields = ("__all__",)

# class ItemDetailSerializer(serializers.ModelSerializer):
#     category = serializers.SerializerMethodField()
#     label = serializers.SerializerMethodField()
#     variations = serializers.SerializerMethodField()

#     class Meta:
#         model = Item
#         fields = (
#             "id",
#             "title",
#             "price",
#             "discount_price",
#             "category",
#             "label",
#             "slug",
#             "description",
#             "image",
#             "variations",
#         )
#         # fields = ("id",)

#     def get_category(self, obj):
#         return obj.get_category_display()

#     def get_label(self, obj):
#         return obj.get_label_display()

#     def get_variations(self, obj):
#         return VariationSerializer(obj.variation_set.all(), many=True).data


# class AddressSerializer(serializers.ModelSerializer):
#     country = CountryField()

#     class Meta:
#         model = Address
#         fields = (
#             "id",
#             "user",
#             "street_address",
#             "apartment_address",
#             "country",
#             "zip",
#             "address_type",
#             "default",
#         )

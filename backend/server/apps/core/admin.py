from django.contrib import admin

from .models import (
    Category,
    Product,
    Variation,
    VariationOption,
    ProductConfiguration,
    # Coupon,
    # Item,
    # ItemVariation,
    # Order,
    # OrderItem,
    # Variation,
    # UserProfile,
)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    # fields = ["type", "name",]
    list_display = ["type", "name"]
    list_display_links = ["type", "name"]
    list_filter = ["type", "name"]
    search_fields = ["name"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["name", "sku", "category"]
    # list_display_links = ["type", "name"]
    # list_filter = ["type", "name"]
    # search_fields = ["name"]


@admin.register(Variation)
class VariationAdmin(admin.ModelAdmin):
    list_display = ["category", "name"]


@admin.register(VariationOption)
class VariationOptionAdmin(admin.ModelAdmin):
    # list_display = ["variation", "value"]
    list_display = ["variation", "ru_size", "eu_size", "uk_size"]


@admin.register(ProductConfiguration)
class ProductConfigurationAdmin(admin.ModelAdmin):
    list_display = ["product", "variation_option", "vendor", "price", "quantity"]


# class ItemVariationAdmin(admin.ModelAdmin):
#     list_display = ["variation", "value", "attachment"]
#     list_filter = ["variation", "variation__item"]
#     search_fields = ["value"]


# class ItemVariationInLineAdmin(admin.TabularInline):
#     model = ItemVariation
#     extra = 1


# class VariationAdmin(admin.ModelAdmin):
#     list_display = ["item", "name"]
#     list_filter = ["item"]
#     search_fields = ["name"]
#     inlines = [ItemVariationInLineAdmin]


# admin.site.register(ProductConfiguration)
# admin.site.register(Address)
# admin.site.register(Category,CategoryAdmin)
# admin.site.register(Product)
# admin.site.register(Item)
# admin.site.register(Variation)
# admin.site.register(Variation, VariationAdmin)
# admin.site.register(ItemVariation, ItemVariationAdmin)
# admin.site.register(OrderItem)
# admin.site.register(Order)
# admin.site.register(UserProfile)
# admin.site.register(Coupon)

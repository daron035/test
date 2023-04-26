from django.urls import path

from .views import (
    ProductListView,
    ProductDetailView,
    AddToStockView,
    # AddressListView,
    # AddressCreateView,
    # CountryListView,
    # ItemListView,
    # ItemDetailView,
    # AddToCartView,
    # OrderDetailView,
    # PaymentView,
)


core_urlpatterns = [
    #     path("api/countries/", CountryListView.as_view(), name="country-list"),
    #     path("api/addresses/", AddressListView.as_view(), name="address-list"),
    #     path("api/addresses/create/", AddressCreateView.as_view(), name="address-create"),
    #     path("api/products/", ItemListView.as_view(), name="product-list"),
    path("api/products/", ProductListView.as_view(), name="product-list"),
    path("api/selling/new/", ProductListView.as_view(), name="selling-list"),
    path(
        "api/selling/new/<str:sku>/", ProductDetailView.as_view(), name="selling-list"
    ),
    path(
        "api/add-to-stock/", AddToStockView.as_view(), name="add-to-stock"
    ),  # button "Add to stock"
    # path("api/products/<pk>/", ItemDetailView.as_view(), name="product-detail"),
    #     path(
    #         "api/add-to-cart/", AddToCartView.as_view(), name="add-to-cart"
    #     ),  # button "Add to cart"
    #     path(
    #         "api/order-summary/", OrderDetailView.as_view(), name="order-summary"
    #     ),  # fetchCart for redux
    #     path("api/checkout/", PaymentView.as_view(), name="checkout"),
    #     path("api/add-coupon/", AddCouponView.as_view(), name="add-coupon"),
]

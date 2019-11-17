from portfolio_django.urls import path

from .views import PostListView, PostDetailView

urlpatterns = [
    path('', PostListView.as_view()),
    path('<pk>', PostDetailView.as_view())
]

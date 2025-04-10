from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, VacancyViewSet

router = DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'vacancies', VacancyViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('companies/<int:pk>/vacancies/', CompanyViewSet.as_view({'get': 'vacancies'}), name='company-vacancies'),
    path('vacancies/top_ten/', VacancyViewSet.as_view({'get': 'top_ten'}), name='top-ten-vacancies'),
]

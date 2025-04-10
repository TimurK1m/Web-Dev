from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    # Эндпоинт для получения вакансий по компании
    @action(detail=True, methods=['get'])
    def vacancies(self, request, pk=None):
        company = self.get_object()
        vacancies = Vacancy.objects.filter(company=company)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    # Эндпоинт для топ-10 вакансий по убыванию зарплаты
    @action(detail=False, methods=['get'])
    def top_ten(self, request):
        top_vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(top_vacancies, many=True)
        return Response(serializer.data)

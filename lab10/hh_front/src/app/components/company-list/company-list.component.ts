import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';
import { Vacancy } from '../../models/vacancy.model';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-list.component.html',
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompanyId: number | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe({
      next: (data) => {
        console.log('Данные получены:', data);
        this.companies = data;
      },
      error: (error) => {
        console.error('Ошибка при получении компаний:', error);
        }
      }
    );
  }
  loadVacancies(id: number) {
    this.selectedCompanyId = id;
    this.companyService.getCompanyVacancies(id).subscribe(data => {
      this.vacancies = data;
    });
  }
  
}

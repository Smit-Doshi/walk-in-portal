import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EducationalQualificationComponent } from './educational-qualification/educational-qualification.component';
import { ProfessionalQualificationComponent } from './professional-qualification/professional-qualification.component';
import { ReviewAndProceedComponent } from './review-and-proceed/review-and-proceed.component';
import { personal_information } from '../data-types';
import { DataService } from '../services/data.service'; 

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    NavbarComponent,
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    EducationalQualificationComponent,
    ProfessionalQualificationComponent,
    ReviewAndProceedComponent,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  faArrowUp = faArrowUp;
  stepCounter: number = 1;
  applicationType: string = '';
  personalInformation!: personal_information;
  fileName: string = ''
  url: string | ArrayBuffer | null | undefined;
  resumeFileName: string = '';

  constructor(private data: DataService) {
    this.personalInformation = data.personalInformation;
  }
  nextStep(): void {
    this.stepCounter += 1;
    console.log('Personal Information', this.data.personalInformation);
    console.log('Education Information', this.data.educationQualification);
    console.log("Fresher Information", this.data.fresherQualification);
    
  }

  previousStep(): void {
    this.stepCounter -= 1;
  }

  showFile(event: any)
  {
    console.log(event);
    this.fileName = event.target.files[0].name;
    const files = event.target.files;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.url = reader.result; 
    }
  }
  showResumeFileName(event: any)
  {
    this.resumeFileName = event.target.files[0].name;
  }
}

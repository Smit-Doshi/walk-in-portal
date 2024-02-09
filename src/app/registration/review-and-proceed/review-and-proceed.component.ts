import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons'
import { DataService } from '../../services/data.service';
import { education_qualification, experienced_professional_qualification, fresher_professional_qualification, personal_information } from '../../data-types';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EducationalQualificationComponent } from '../educational-qualification/educational-qualification.component';
import { ProfessionalQualificationComponent } from '../professional-qualification/professional-qualification.component';

@Component({
  selector: 'review-and-proceed',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, RouterModule, EducationalQualificationComponent,
  ProfessionalQualificationComponent],
  templateUrl: './review-and-proceed.component.html',
  styleUrl: './review-and-proceed.component.css'
})
export class ReviewAndProceedComponent {

    editIcon = faPen
    personalInformation!: personal_information;
    educationQualification!: education_qualification;
    fresherQualification!: fresher_professional_qualification;
    experienceQualification!: experienced_professional_qualification;

    constructor(private data: DataService)
    {
       this.personalInformation = data.personalInformation;
       this.educationQualification = data.educationQualification
       this.fresherQualification = data.fresherQualification
       this.experienceQualification = data.experienceQualification
    }

    editData(id: Number):void{

       
    }
}

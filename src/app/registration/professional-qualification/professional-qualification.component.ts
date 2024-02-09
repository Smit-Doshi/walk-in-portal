import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { experienced_professional_qualification, fresher_professional_qualification } from '../../data-types';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'professional-qualification',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './professional-qualification.component.html',
  styleUrl: './professional-qualification.component.css'
})
export class ProfessionalQualificationComponent {

  applicationType: string = '';
  fresherQualification!: fresher_professional_qualification;
  experienceQualification!: experienced_professional_qualification;

  constructor(private data: DataService)
  {
    this.fresherQualification = data.fresherQualification;
    this.experienceQualification = data.experienceQualification;
  }

  
}

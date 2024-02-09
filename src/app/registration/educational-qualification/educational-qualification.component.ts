import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { education_qualification } from '../../data-types';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'educational-qualification',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './educational-qualification.component.html',
  styleUrl: './educational-qualification.component.css',
})
export class EducationalQualificationComponent {
  yearOfPassings: string[] = ['2020', '2021', '2018'];
  qualifications: string[] = [
    'Bachelor in Technology (B.Tech)',
    'Master in Technology (M.Tech)',
  ];
  streams: string[] = ['Information Technology', 'Computer Science'];
  colleges: string[] = [
    'Pune Institute of Technology (PIT)',
    'Nirma University',
  ];

  educationQualification!: education_qualification;
  constructor(private data: DataService) {
    this.educationQualification = data.educationQualification;
  }
}

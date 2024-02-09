import { Injectable } from '@angular/core';
import { education_qualification, experienced_professional_qualification, fresher_professional_qualification, personal_information } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  personalInformation!: personal_information;
  educationQualification!: education_qualification;
  fresherQualification!: fresher_professional_qualification;
  experienceQualification!: experienced_professional_qualification;

  constructor() {
    this.personalInformation = {
      firstName: '',
      lastName: '',
      email: '',
      emailNotification: false,
      phoneNo: '',
      portflioUrl: '',
      preferredJobRoles: [],
      referral: '',
      resume: '',
      portfolioImage: '',
    };
    this.educationQualification = {
      college: '',
      location: '',
      otherCollege: '',
      percentage: '',
      qualification: '',
      stream: '',
      yearOfPassing: '',
    };
    this.fresherQualification = {
      appliedForTest: false,
      others: '',
      roleAppliedFor: '',
      technologiesFamiliar: [],
    };

    this.experienceQualification = {
      appliedForTest: false,
      currentCTC: '',
      expectedCTC: '',
      noticePeriod: false,
      noticePeriodTime: '',
      othersExpertise: '',
      othersFamiliar: '',
      period: new Date,
      roleAppliedFor: '',
      technologiesExpertise: [],
      technologiesFamiliar: [],
      yearsOfExperience: '' 
    }
  }
}

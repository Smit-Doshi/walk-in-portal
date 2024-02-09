export interface personal_information {
    firstName: string
    lastName: string
    email: string
    phoneNo: string
    resume: string
    portflioUrl: string
    preferredJobRoles: string[]
    referral: string
    emailNotification: boolean,
    portfolioImage: string
}

export interface education_qualification {
    percentage: string
    yearOfPassing: string
    qualification: string
    stream: string
    college: string
    otherCollege: string
    location: string
}

export interface fresher_professional_qualification {
    technologiesFamiliar: string[]
    others: string
    appliedForTest: boolean
    roleAppliedFor: string
}

export interface experienced_professional_qualification {
    yearsOfExperience: string
    currentCTC: string
    expectedCTC: string
    technologiesExpertise: string[]
    othersExpertise: string
    technologiesFamiliar: string[]
    othersFamiliar: string
    noticePeriod: boolean
    period: Date
    noticePeriodTime: string
    appliedForTest: boolean
    roleAppliedFor: string
}

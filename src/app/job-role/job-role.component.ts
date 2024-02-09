import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobRoleService } from '../services/job-role.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleUp, faArrowUp, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-job-role',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './job-role.component.html',
  styleUrl: './job-role.component.css'
})
export class JobRoleComponent implements OnInit {

  jobId?:number;
  jobRole?:object;
  locationIcon = faLocationDot
  accordianIconUp = faAngleUp
  accordianIconDown = faAngleDown
  isapplicationBodyVisible!:boolean;
  resumeIcon = faArrowUp;
  isJobApplicationVisible!: boolean[]
  constructor(private activatedRoute: ActivatedRoute, private job: JobRoleService){}

  ngOnInit(): void {
    
    this.jobId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    
    this.jobRole = this.job.jobRoles.find(drive => drive.id == this.jobId)

    this.isapplicationBodyVisible = false
    this.isJobApplicationVisible = [false, false, false]
  }
  isApplicationAccordianVisible(event: any)
  {
    event.stopPropagation()
    this.isapplicationBodyVisible = !this.isapplicationBodyVisible
  }
  isJobAccordianVisible(id: number)
  {
    this.isJobApplicationVisible[id] = !this.isJobApplicationVisible[id]
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-listing-page',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './listing-page.component.html',
  styleUrl: './listing-page.component.css'
})
export class ListingPageComponent implements OnInit {

   locationIcon = faLocationDot
   constructor(private router : Router)
   {

   }
   ngOnInit(): void {
   }
   move(){
    this.router.navigate(['/job/1'])
   }
}

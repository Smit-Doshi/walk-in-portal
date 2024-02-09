import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  currentUrl?:string
 
  ngOnInit(): void {
     this.currentUrl = window.location.pathname
     console.log(this.currentUrl);
     
  }
}

import { Component } from '@angular/core';
import { ServiceModel } from '../service';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { ClientauthentificationserviceService } from '../clientauthentificationservice.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  addedService: ServiceModel | undefined;
  services: ServiceModel[] = [];
  errorMessage: string = '';

  constructor(
    private serviceService: ServiceService,
    private router: Router,
    private authService: ClientauthentificationserviceService
  ) { }


  isAuthenticated(): boolean {
    // Check if the user is authenticated
    return this.authService.isAuthenticated();
  }

  logout(): void {
    // Perform logout operation
    this.authService.logout().subscribe(() => {
      // Clear current user data
      this.authService.clearCurrentUser();
      // Redirect to home page
      this.router.navigate(['/loginClient']);
    });
  }
}



import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleLogout(event: Event): void {
    event.preventDefault();
    // this.authService.logout();
    // this.router.navigate(['/auth/login']);
  }
}

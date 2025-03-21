import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../core/services/AuthService.service';

@Component({
  selector: 'app-auth-navbar-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './auth-navbar-component.component.html',
  styleUrls: ['./auth-navbar-component.component.css'],
})
export class AuthNavbarComponentComponent {
  private authService = inject(AuthService);

  isAdmin = computed(() => {
    return this.authService.isAllowedByRole(['ROLE_ADMIN']);
  });
}

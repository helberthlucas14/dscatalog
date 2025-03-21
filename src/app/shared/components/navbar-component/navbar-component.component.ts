import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/AuthService.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent implements OnInit, OnDestroy {
  currentUser: string | null = null;
  private userSubscription!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Assina o estado reativo do usuário para atualizações automáticas
    this.userSubscription = this.authService.user$.subscribe(() => {
      const tokenData = this.authService.getAccessTokenDecoded();
      this.currentUser = tokenData?.user_name ?? null;
    });
  }

  handleLogout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}

import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../../core/services/AuthService.service';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/auth/login']);
    return false;
  }

  const allowedRoles = route.data?.['allowedRoles'];
  if (allowedRoles && !authService.isAllowedByRole(allowedRoles)) {
    router.navigate(['/']);
    return false;
  }

  return true;
};

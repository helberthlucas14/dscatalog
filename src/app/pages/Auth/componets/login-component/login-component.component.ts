import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/AuthService.service';
import { CardComponentComponent } from '../card-component/card-component.component';
import { ButtonIconComponentComponent } from '../../../../shared/components/button-icon-component/button-icon-component.component';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login-component',
  standalone: true,
  templateUrl: './login-component.component.html',
  imports: [
    CommonModule,
    CardComponentComponent,
    ReactiveFormsModule,
    ButtonIconComponentComponent,
  ],
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {
  loginForm: FormGroup;
  hasError = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  // Método de envio do formulário
  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.authService
        .login(loginData)
        .pipe(
          catchError((error) => {
            this.hasError = true;
            console.error('Erro no login:', error);
            throw error;
          })
        )
        .subscribe(() => {
          this.hasError = false;
          this.router.navigate(['/admin']); // Redireciona após login
        });
    }
  }
}

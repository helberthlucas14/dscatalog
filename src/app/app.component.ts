import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NavbarComponentComponent } from './shared/components/navbar-component/navbar-component.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TooltipModule, NavbarComponentComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dscatalog';
}

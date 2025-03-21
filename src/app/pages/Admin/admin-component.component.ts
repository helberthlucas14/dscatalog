import { Component, OnInit } from '@angular/core';
import { AuthNavbarComponentComponent } from '../Auth/componets/auth-navbar-component/auth-navbar-component.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css'],
  imports: [CommonModule, RouterModule, AuthNavbarComponentComponent],
})
export class AdminComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

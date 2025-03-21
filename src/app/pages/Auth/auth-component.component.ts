import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'auth-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css'],
})
export class AuthComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

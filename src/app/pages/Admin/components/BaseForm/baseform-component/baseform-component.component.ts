import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baseform-component',
  standalone: true,
  templateUrl: './baseform-component.component.html',
  styleUrls: ['./baseform-component.component.css'],
})
export class BaseformComponentComponent implements OnInit {
  @Input() title: string = '';
  constructor(private router: Router) {}

  ngOnInit() {}

  handleCancel() {
    this.router.navigate(['../']); // Navega para a rota anterior
  }
}

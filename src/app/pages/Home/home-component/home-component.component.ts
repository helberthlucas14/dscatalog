import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonIconComponentComponent } from '../../../shared/components/button-icon-component/button-icon-component.component';
@Component({
  standalone: true,
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  imports: [RouterLink, ButtonIconComponentComponent],
})
export class HomeComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

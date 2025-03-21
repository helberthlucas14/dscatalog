import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  standalone: true,
  templateUrl: './button-icon-component.component.html',
  styleUrls: ['./button-icon-component.component.css'],
})
export class ButtonIconComponentComponent implements OnInit {
  @Input() text: string = '';
  constructor() {}

  ngOnInit() {}
}

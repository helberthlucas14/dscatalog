import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination-component.component.html',
  styleUrls: ['./pagination-component.component.css'],
})
export class PaginationComponentComponent {
  @Input() totalPages: number = 0; // Número total de páginas
  @Input() activePage: number = 0; // Página ativa
  @Output() pageChange = new EventEmitter<number>(); // Emite a página selecionada

  // Gera a lista de páginas
  generateList(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  // Função para mudança de página
  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {

  @Input() private page: number;
  @Input() private totalPages: number;
  @Input() public numStarShips: number;
  @Output() paginaEmitter: EventEmitter<number> = new EventEmitter();

  aPaginas: number[] = [];
  selectedPage: number;

  constructor() { }

  ngOnInit(): void {
    this.selectedPage = 0;
    this.aPaginas = [];
    for ( let i = 1; i <= this.totalPages; i++) { this.aPaginas.push(i); } // cargar numeraciones de páginas.
  }

  siguiente() {
    this.page++;
    this.pasarPagina();
  }

  anterior() {
    this.page--;
    this.pasarPagina();
  }

  goToPage(page) {
    this.page = page;
    this.pasarPagina();
  }

  pasarPagina() {
    this.selectedPage = this.page - 1;
    this.paginaEmitter.emit(this.page);
  }  

}

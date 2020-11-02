import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {

  @Input() private page: number;
  @Input() private totalPages: number;
  @Input() public numStarShips: number;
  @Input() public numResults: number;
  @Output() paginaEmitter: EventEmitter<number> = new EventEmitter();
  @Output() itemsEmitter: EventEmitter<number> = new EventEmitter();

  aPaginas: number[] = [];
  selectedPage: number;
  itemRef: number;

  constructor() { }

  ngOnInit(): void {
    this.initPaginas();

  }

  // Inicializar nº de páginas.
  initPaginas() {
    this.selectedPage = 0; // Inicializar a la 1ª página.
    this.aPaginas = [];
    for ( let i = 1; i <= this.totalPages; i++) { this.aPaginas.push(i); } // Cargar numeraciones de páginas.
    this.itemRef = this.numResults; // Actualikzar nº de items por página.

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

  // Cambiar nº de items por página.
  ItemsPerPage( items ) {
    this.numResults = items;  // Actualizar nuevo nº de items por página.
    this.totalPages = Math.ceil(this.numStarShips / this.numResults); // Actualizar nuevo nº de páginas.
    this.initPaginas();  // Inicializar nº de páginas.
    this.itemsEmitter.emit(items);

  }

}

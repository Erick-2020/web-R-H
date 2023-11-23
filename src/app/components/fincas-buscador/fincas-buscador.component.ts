import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fincas-buscador',
  templateUrl: './fincas-buscador.component.html',
  styleUrls: ['./fincas-buscador.component.css']
})
export class FincasBuscadorComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch() {
    if (this.searchTerm.trim() === '') {
      // Si el campo de búsqueda está vacío, emite una cadena vacía para mostrar todas las fincas.
      this.searchEvent.emit('');
    } else {
      // Si hay un término de búsqueda, emite el término de búsqueda para filtrar las fincas.
      this.searchEvent.emit(this.searchTerm);
    }
  }
}
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Output() scrollEvent = new EventEmitter<string>();
  
    // Se agrega el siguiente código para realizar el desplazamiento suave al elemento (SECCION) correspondiente
    scrollToComponent(elementId: string): void {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
}

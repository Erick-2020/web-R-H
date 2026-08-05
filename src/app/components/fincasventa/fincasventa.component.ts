import { Component, EventEmitter, Output } from '@angular/core';


interface FincasVenta {
  title: string;
  description: string;
  image: string;
  precio: string[];
  link: string;
  alt: string;
}

@Component({
  selector: 'app-fincasventa',
  templateUrl: './fincasventa.component.html',
  // nos dirigimos a los estilos ya creados de fincas alquiler para no tener que duplicar los mismos
  styleUrls: ['../fincasalquiler/fincasalquiler.component.css']
})
export class FincasventaComponent {

  // cantidad de tarjetas visibles
  visibleCardsCount = 12;
  // cantidad de tarjetas a agregar al hacer click en "Cargar más"
  cardsIncrement = 8;
  // Metodo para cargar mas tarjetas al hacer click en "Cargar mas"
  loadMoreCards(){
    setTimeout(() =>{
      this.visibleCardsCount += this.cardsIncrement;
    }, 200)
  }
  // variable para filtrar y buscar fincas
  filteredFincas !: FincasVenta[];


  //Metodo el boton del nav
  @Output() scrollEvent = new EventEmitter<string>();
  // Se agrega el siguiente código para realizar el desplazamiento suave al elemento (SECCION) correspondiente
  scrollToComponent(elementId: string): void {
  const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Metodo del buscador
  onSearch(searchTerm: string){
    if(searchTerm.trim()){
      this.filteredFincas = this.fincas.filter((finca)=>
        finca.alt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredFincas = [...this.fincas]
    }

  }

  fincas: FincasVenta[] = [
    {
      title: 'V PAYANDE 1',
      description: 'Espectacular casa campestre en condominio, sobre la autopista Bogotá-Medellín de Villeta a una hora y media de Bogotá. Cuenta con 4 habitaciones con baño privado - aire acondicionado y ventilador de techo, baño social, zona de ropas y baño de servicio, cocina moderna, piscina y jacuzzi',
      image: '../../../assets/img/venta/payande-1.webp',
      precio: ['$ 1.650 MILLONES COP', 'Lote: 1.342Mt2'],
      link: 'https://photos.app.goo.gl/gZATNC3qNPE5VNnu7',
      alt: 'Finca Payande',
    },
    {
      title: 'V BELLAVISTA 2',
      description: 'Espectacular  casa campestre, cuenta con alcobas con baño privado y aire, baño social, cocina abierta hacia zona social de la piscina, parqueadero y amplia zona verde',
      image: '../../../assets/img/venta/bellavista-2.webp',
      precio: ['$ 1.250 MILLONES COP', 'Lote: 1.000Mt2'],
      link: 'https://photos.app.goo.gl/38stqDRa4LKpVAE48',
      alt: 'Finca en bellavista',
    },
    {
      title: 'V FINCA CASA SAN JOSE',
      description: 'Hermosa finca amplia y campestre, cuenta con 6 habitaciones familiares capacidad máxima de 61 personas, piscina, Jacuzzi, zona BBQ, parqueadero, canchas te tejo, cancha de fútbol y amplias zonas verdes.',
      image: '../../../assets/img/venta/mayor.webp',
      precio: ['$ 3.200 MILLONES COP', 'Lote:19.200Mt'],
      link: 'https://photos.app.goo.gl/aC4SBNjsVe6gm8bL8',
      alt: 'Finca Cune Mayor',
    },
    
  ]

// FIN DE LA CLASE
}

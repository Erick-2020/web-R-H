import { Component, EventEmitter, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import Swal from 'sweetalert2';

interface Fincas {
  title: string;
  description: string;
  image: string;
  precio: string[];
  link: string;
  link2?: string; // Propiedad opcional para el segundo enlace
  alt: string;
}

@Component({
  selector: 'app-fincasalquiler',
  templateUrl: './fincasalquiler.component.html',
  styleUrls: ['./fincasalquiler.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ])
  ],
})

export class FincasalquilerComponent {
    // Cantidad inicial de tarjetas visibles
    visibleCardsCount = 12;
    // Cantidad de tarjetas a agregar al hacer clic en "Cargar más"
    cardsIncrement = 8;
    filteredFincas!: Fincas[];
    // Método para cargar más tarjetas al hacer clic en "Cargar más"
    loadMoreCards() {
      setTimeout(() => {
        this.visibleCardsCount += this.cardsIncrement;
      }, 200);
    }

  @Output() scrollEvent = new EventEmitter<string>();
  
    // Se agrega el siguiente código para realizar el desplazamiento suave al elemento (SECCION) correspondiente
    scrollToComponent(elementId: string): void {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    onSearch(searchTerm: string) {
      if (searchTerm.trim()) {
        this.filteredFincas = this.fincas.filter((finca) =>
          finca.alt.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        this.filteredFincas = [...this.fincas];
      }
    }

    confirmarSalida(event: Event, url: string): void {
      event.preventDefault();

      Swal.fire({
        title: '¿Estás seguro de reservar por Airbnb?',
        text: 'Puedes reservar directamente con nosotros.¿Deseas continuar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, reservar con Airbnb',
        cancelButtonText: 'No, con ustedes'
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(url, '_blank');
        }
      });
    }

      // Lista de proyectos
      fincas: Fincas[] = [
      {
          title: 'FINCA DOS MADEROS 2',
          description: 'Finca ubicada a 10 minutos del centro de Villeta cuenta con 5 habitaciones, sala, comedor, cocina, piscina, juegos, pimpón, billar, cancha de fútbol.',
          image: '../../../assets/img/maderos-2.webp',
          precio: ['$130.000 x 💁‍♂️', '$50.000 🚽🧽', '20 👪'],
          link: 'https://photos.app.goo.gl/pb1cSR2L2FSpmUh76',
          alt: 'Finca Dos Maderos 2',
      },
      {
          title: 'FINCA COND 5 ESTRELLAS',
          description: 'Hermosa finca en condominio cerrado; cuenta con 5 habitaciones, sala, comedor, cocina, amplias zonas verdes, parqueadero, piscina y zona BBQ',
          image: '../../../assets/img/estrellas.webp',
          precio: ['$130.000 x 💁‍♂️', '$50.000 🚽🧽', '16 👪'],
          link: 'https://photos.app.goo.gl/FaJPE1SVoZzLze5cA',
          link2: 'https://www.airbnb.com.co/',
          alt: 'Finca Cond 5 Estrellas',
      },
      {
          title: 'FINCA COND 5 ESTRELLAS 2',
          description: 'Hermosa finca en condominio cerrado; cuenta con 6 habitaciones, sala, comedor, cocina, amplias zonas verdes, parqueadero, piscina y zona BBQ',
          image: '../../../assets/img/estrellas-2.JPG',
          precio: ['$100.000 x 💁‍♂️', '$50.000 🚽🧽', '13 👪'],
          link: 'https://photos.app.goo.gl/2W2i3wn6y1UtCHGG9',
          link2: 'https://www.airbnb.com.co/',
          alt: 'Finca Cond 5 Estrellas 2',
      },
      {
          title: 'FINCA PRIMAV PAYANDE 3',
          description: 'Hermosa finca moderna y campestre ubicada a 15 minutos aproximadamente del centro de Villeta; Cuenta con capacidad para 18 personas en cama.',
          image: '../../../assets/img/primav-payande.webp',
          precio: ['$130.000 x 💁‍♂️', '$50.000 🚽🧽', '18 👪'],
          link: 'https://photos.app.goo.gl/gFyJsoMXbB1nYrME6',
          alt: 'Finca Primav Payande 3',
      },
      // {
      //     title: 'FINCA VIA MAG',
      //     description: 'Sin Descripción 😥',
      //     image: '',
      //     precio: ['$120.000 x 💁‍♂️', '$50.000 🚽🧽', '10 👪'],
      //     link: 'https://danieldct.github.io/traveling/',
      //     alt: 'Finca Via Mag',
      // },
      {
          title: 'FINCA CUNE CASA SAN JOSE',
          description: 'Hermosa finca amplia y campestre, cuenta con 6 habitaciones familiares capacidad máxima de 61 personas, piscina, Jacuzzi, zona BBQ, parqueadero, canchas te tejo, cancha de fútbol y amplias zonas verdes.',
          image: '../../../assets/img/mayor.webp',
          precio: ['$90.000 x 💁‍♂️', '$100.000 🚽🧽', '60 👪'],
          link: 'https://photos.app.goo.gl/aC4SBNjsVe6gm8bL8',
          alt: 'Finca Cune Casa San Jose',
      },
      {
          title: 'FINCA LOS TOTUMOS',
          description: 'Tenemos disponible esta finca campestre ubicada a 10 minutos de Villeta, cuenta con piscina, jacuzzi, salón BBQ, parqueadero y zonas verdes, perfecta para un descanso familiar espectacular.',
          image: '../../../assets/img/totumos.webp',
          precio: ['$1.300.000 x NOCHE', '$50.000 🚽🧽', '14 👪'],
          link: 'https://photos.app.goo.gl/sHmNr8yLuKNFxQfi9',
          link2: 'https://www.airbnb.com.co/',
          alt: 'Finca Los Totumos',
      },
      {
          title: 'FINCA LA VEGA',
          description: 'Hermosa finca moderna y campestre, cuenta con 3 habitaciones, sala, comedor, cocina, piscina, jacuzzi, BBQ, billar y bolirrana de juegos, parqueadero y amplias zonas verdes.',
          image: '../../../assets/img/la-vega.webp',
          precio: ['$120.000 x 💁‍♂️', '$50.000 🚽🧽', '15 👪'],
          link: 'https://photos.app.goo.gl/1w8F6Xwx7UVqFjoYA',
          link2: 'https://www.airbnb.com.co/',
          alt: 'Finca La Vega',
      },
      {
          title: 'FINCA LOS CABALLOS',
          description: 'Finca campestre ubicada a 20 minutos del centro de Villeta cuenta con 4 habitaciones, con piscina, jacuzzi, BBQ, parqueadero, quiosco y zonas verdes, capacidad máxima de 15 personas.',
          image: '../../../assets/img/caballos.webp',
          precio: ['$80.000 x 💁‍♂️', '$50.000 🚽🧽', '15 👪'],
          link: 'https://photos.app.goo.gl/c4d7Fn3ukUKrAAgk7',
          link2: 'https://www.airbnb.com.co/',
          alt: 'Finca Los Caballos',
      },
      {
          title: 'FINCA CLARITA',
          description: 'Hermosa finca ubicada a 15 minutos del centro de Villeta, amplia y campestre, cuenta con 4 habitaciones, pisicna, jacuzzi, BBQ, zonas verdes, parqueadero y salón, mini tejo y bolirana, capacidad máxima de 20 personas en cama.',
          image: '../../../assets/img/clarita.webp',
          precio: ['$80.000 x 💁‍♂️', '$50.000 🚽🧽', '20 👪'],
          link: 'https://photos.app.goo.gl/9H8c7JG67iCSwhJWA',
          link2: 'https://www.airbnb.com.co/',
          alt: 'Finca Clarita',
      },
      {
          title: 'FINCA CUNE EFECUN',
          description: 'Hermosa cabañas campestre, ubicada a 15 minutos de Villeta cuenta con 4 cabañas con baño privado, piscina, jacuzzi, BBQ, amplias zonas verdes con capacidad de 20 personas, tiene un precio de 80.000 por persona por noche.',
          image: '../../../assets/img/efecun.webp',
          precio: ['$90.000 x 💁‍♂️', '$50.000 🚽🧽', '32 👪'],
          link: 'https://photos.app.goo.gl/TniNmcA7yU76hF8P8',
          link2: 'https://www.airbnb.com.co/',
          alt: 'Finca Cune Efecun',
      },
      {
          title: 'FINCA MANI ALTO',
          description: 'Tenemos disponible esta hermosa finca a 10 minutos de Villeta, amplia y lujosa, cuenta con 6 habitaciones, piscina, Jacuzzi, sala, comedor.',
          image: '../../../assets/img/mani-alto.webp',
          precio: ['$120.000 x 💁‍♂️', '$50.000 🚽🧽', '20 👪'],
          link: 'https://photos.app.goo.gl/kJsZZmKrDKXfBjWJ9',
          alt: 'Finca Mani Alto',
      },
      {
          title: 'FINCA CUNE PLAY 5',
          description: 'Finca ubicada a 15 minutos de Villeta cuenta con 4 habitaciones familiares, sala, comedor, cocina, piscina, BBQ.',
          image: '../../../assets/img/play-5.webp',
          precio: ['$75.000 x 💁‍♂️', '$50.000 🚽🧽', '15 👪'],
          link: 'https://photos.app.goo.gl/hnrxkJzwrJADVVXA6',
          alt: 'Finca Cune Play 5',
      },
      {
          title: 'FINCA CUNE 4',
          description: 'Amplia finca campestre ubicada a 10 minutos del centro de Villeta, grandes zonas verdes, 4 habitaciones sencillas, piscina, zona BBQ, cocina y parqueadero, tiene un precio de 70.000 por persona por noche.',
          image: '../../../assets/img/cune-4.webp',
          precio: ['$70.000 x 💁‍♂️', '$50.000 🚽🧽', '15 👪'],
          link: 'https://photos.app.goo.gl/6npeHpy9V36Ezb3L9',
          alt: 'Finca Cune 4',
      },
      {
          title: 'FINCA CUNE PLEY 2',
          description: 'Hermosa finca campestre ubicada a 10 minutos del centro de Villeta, cuenta with 4 habitaciones familiares dos with baño privado, cocina, sala comedor, Quisco, pisicna, jacuzzi, próximamente zona BBQ y amplias zonas verdes.',
          image: '../../../assets/img/pley-2.webp',
          precio: ['$75.000 x 💁‍♂️', '$50.000 🚽🧽', '20 👪'],
          link: 'https://photos.app.goo.gl/ERQjwTEtMriBvT16A',
          alt: 'Finca Cune Pley 2',
      },
      {
          title: 'FINCA RECREO',
          description: 'Hermosa casa quinta, ubicada a 6 cuadras del parque principal, cuenta con pisicna, zona BBQ, parqueadero, 3 habitaciones, cocina y sala comedor.',
          image: '../../../assets/img/recreo.webp',
          precio: ['$85.000 x 💁‍♂️', '$50.000 🚽🧽', '9 👪'],
          link: 'https://photos.app.goo.gl/foSrZSBdLM1dNcBy8',
          link2: 'https://www.airbnb.com.co/',
          alt: 'Finca Recreo',
      },
      {
          title: 'CASA CENTRO',
          description: 'Disponible esta hermosa casa quinta, con capacity máxima de 15 personas, cuenta with 3 habitaciones, sala, comedor, cocina, pisicna, jacuzzi, asador y parqueadero.',
          image: '../../../assets/img/c-centro.webp',
          precio: ['$90.000 x 💁‍♂️', '$50.000 🚽🧽', '15 👪'],
          link: 'https://photos.app.goo.gl/K3g2WHMip1jawwCz8',
          alt: 'Casa Centro',
      },
      {
          title: 'VILLA ALEJ CUNE',
          description: 'Hermosa finca campestre, ubicada a 25 minutos del centro de Villeta, cuenta with 9 habitaciones with baño privado, pisicna, jacuzzi, zona BBQ, lago, Quisco, parqueadero y amplias zonas verdes.',
          image: '../../../assets/img/villa-alej.webp',
          precio: ['$75.000 x 💁‍♂️', '$50.000 🚽🧽', '50 👪'],
          link: 'https://photos.app.goo.gl/QRuEfMMBy1bGpMM49',
          alt: 'Villa Alej Cune',
      },
      {
          title: 'FINCA MANI BAJO 2',
          description: 'Hermosa finca ubicada a 5 minutos del centro de Villeta, cuenta con 10 habitaciones familiares para 60 personas, pisicna, zonas verdes, zona BBQ, banquitas, boliplaya, cancha de tejo y mesa de billar y billar Pool',
          image: '../../../assets/img/mani-bajo-2.webp',
          precio: ['$70.000 x 💁‍♂️', '$50.000 🚽🧽', '50 👪'],
          link: 'https://photos.app.goo.gl/Wpd8Lr43hzPeC1g29',
          alt: 'Finca Mani Bajo 2',
      },
      {
          title: 'CASA MANI BAJO 1',
          description: 'Hermosa finca ubicada a 5 minutos del centro de villeta, cuenta con 5 habitaciones, sala comedor, cocina, zona BBQ, piscina.',
          image: '../../../assets/img/mani-bajo-1.webp',
          precio: ['$100.000 x 💁‍♂️', '$50.000 🚽🧽', '15 👪'],
          link: 'https://photos.app.goo.gl/ePQyKPGKKqFPSwZk9',
          alt: 'Casa Mani Bajo 1',
      },
      {
        title: 'CASA SAN ANTONIO',
        description: 'Hermosa casa quinta ubicada a 5 minutos del centro de Villeta, cuenta con cuatro habitaciones, sala, comedor, cocina y piscina.',
        image: '../../../assets/img/casa-santonio.webp',
        precio: ['$70.000 x 💁‍♂️', '$50.000 🚽🧽', '10 👪'],
        link: 'https://photos.app.goo.gl/ARVKm4TbEfHmgc5B7',
        alt: 'Imagen de Casa San Antonio'
      },
      {
        title: 'CASA FERNANDO SALAZAR 3',
        description: 'Hermosa finca ubicada a 5 minutos del centro de Villeta, cuenta con 5 habitaciones con capacidad máxima de 20 personas, sala, comedor, cocina, parqueadero, pisicna, BBQ y mesa de billar.',
        image: '../../../assets/img/casa-fernando-3.webp',
        precio: ['$90.000 x 💁‍♂️', '$50.000 🚽🧽', '20 👪'],
        link: 'https://photos.app.goo.gl/wC6h4sojKZpikrX59',
        alt: 'Imagen de Casa Fernando Salazar 3'
      },
      {
        title: 'FINCA F. SALAZAR 6',
        description: 'Hermosa finca campestre para 25 personas, ubicada a 5 minutos del centro de Villeta, cuenta con 5 habitaciones con cama doble y camarote, tv, baño, balcón, cabaña múltiple con tv y baño, salón, baño social, cocina con BBQ y parqueadero.',
        image: '../../../assets/img/finca-fernando-6.webp',
        precio: ['$90.000 x 💁‍♂️', '$50.000 🚽🧽', '25 👪'],
        link: 'https://photos.app.goo.gl/du3xPhZsMtcQcpza7',
        alt: 'Imagen de Finca F. Salazar 6'
      }
      ];
    }
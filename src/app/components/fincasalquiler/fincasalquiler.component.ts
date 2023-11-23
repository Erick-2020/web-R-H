import { Component, EventEmitter, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


interface Fincas {
  title: string;
  description: string;
  image: string;
  precio: string[];
  link: string;
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

      // Lista de proyectos
      fincas: Fincas[] = [
        {
          title: 'FINCA DOS MADEROS',
          description: 'Finca campestre ubicada a 10 metros de Villeta; Cuenta con 2 habitaciones, 1 cabaña, sala y sala de estar, comedor, cocina, piscina, jacuzzi y zona BBQ',
          image: '../../../assets/img/',
          precio: ['$120.000 x Persona', '$50.000 Aseo'],
          link: '',
          alt: 'Finca Dos Maderos',
      },
      {
          title: 'FINCA DOS MADEROS 2',
          description: 'Finca ubicada a 10 minutos del centro de Villeta cuenta con 5 habitaciones, sala, comedor, cocina, piscina, juegos, pimpón, billar, cancha de fútbol.',
          image: '../../../assets/img/maderos-2.jpg',
          precio: ['$130.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/pb1cSR2L2FSpmUh76',
          alt: 'Finca Dos Maderos 2',
      },
      {
          title: 'FINCA COND 5 ESTRELLAS',
          description: 'Hermosa finca en condominio cerrado; cuenta con 5 habitaciones, sala, comedor, cocina, amplias zonas verdes, parqueadero, piscina y zona BBQ',
          image: '../../../assets/img/estrellas.jpeg',
          precio: ['$120.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/FaJPE1SVoZzLze5cA',
          alt: 'Finca Cond 5 Estrellas',
      },
      {
          title: 'FINCA PRIMAV PAYANDE 3',
          description: 'Hermosa finca moderna y campestre ubicada a 15 minutos aproximadamente del centro de Villeta; Cuenta con capacidad para 18 personas en cama.',
          image: '../../../assets/img/primav-payande.jpg',
          precio: ['$130.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/gFyJsoMXbB1nYrME6',
          alt: 'Finca Primav Payande 3',
      },
      {
          title: 'FINCA VIA MAG',
          description: 'Sin Descripción 😥',
          image: '',
          precio: ['$120.000 x Persona', '$50.000 Aseo'],
          link: 'https://danieldct.github.io/traveling/',
          alt: 'Finca Via Mag',
      },
      {
          title: 'FINCA CUNE CASA SAN JOSE',
          description: 'Hermosa finca amplia y campestre, cuenta con 6 habitaciones familiares capacidad máxima de 61 personas, piscina, Jacuzzi, zona BBQ, parqueadero, canchas te tejo, cancha de fútbol y amplias zonas verdes.',
          image: '../../../assets/img/mayor.jpg',
          precio: ['$80.000 x Persona', '$100.000 Aseo'],
          link: 'https://photos.app.goo.gl/aC4SBNjsVe6gm8bL8',
          alt: 'Finca Cune Casa San Jose',
      },
      {
          title: 'FINCA LOS TOTUMOS',
          description: 'Tenemos disponible esta finca campestre ubicada a 10 minutos de Villeta, cuenta con piscina, jacuzzi, salón BBQ, parqueadero y zonas verdes, perfecta para un descanso familiar espectacular.',
          image: '../../../assets/img/totumos.jpg',
          precio: ['$1.300.000 x NOCHE', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/sHmNr8yLuKNFxQfi9',
          alt: 'Finca Los Totumos',
      },
      {
          title: 'FINCA LA VEGA',
          description: 'Hermosa finca moderna y campestre, cuenta con 3 habitaciones, sala, comedor, cocina, piscina, jacuzzi, BBQ, billar y bolirrana de juegos, parqueadero y amplias zonas verdes.',
          image: '../../../assets/img/la-vega.jpg',
          precio: ['$120.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/1w8F6Xwx7UVqFjoYA',
          alt: 'Finca La Vega',
      },
      {
          title: 'FINCA LOS CABALLOS',
          description: 'Finca campestre ubicada a 20 minutos del centro de Villeta cuenta con 4 habitaciones, con piscina, jacuzzi, BBQ, parqueadero, quiosco y zonas verdes, capacidad máxima de 15 personas.',
          image: '../../../assets/img/caballos.jpg',
          precio: ['$80.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/c4d7Fn3ukUKrAAgk7',
          alt: 'Finca Los Caballos',
      },
      {
          title: 'FINCA RIO D EMMANUEL',
          description: 'Hermosa finca campestre a 5 minutos del centro de Villeta, cuenta con 3 cabañas familiares y 1 habitación familiar, piscina, cocina, asador, zonas verdes, parqueadero y zona de Bar.',
          image: '../../../assets/img/emmanuel.jpg',
          precio: ['$80.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/fNj9Uyzcjetwd3DBA',
          alt: 'Finca Rio D Emmanuel',
      },
      {
          title: 'FINCA CUNE 3',
          description: 'Tenemos disponible esta hermosa finca campestre, ubicada a 15 minutos del centro de Villeta, cuenta con piscina, zona BBQ, parqueadero, 6 habitaciones familiares, cocina, balcón, bolirana, rana y sala comedor.',
          image: '../../../assets/img/cune-3.jpg',
          precio: ['$80.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/Gns6qds5okDZ9XuEA',
          alt: 'Finca Cune 3',
      },
      {
          title: 'FINCA CLARITA',
          description: 'Hermosa finca ubicada a 15 minutos del centro de Villeta, amplia y campestre, cuenta con 4 habitaciones, pisicna, jacuzzi, BBQ, zonas verdes, parqueadero y salón, mini tejo y bolirana, capacidad máxima de 20 personas en cama.',
          image: '../../../assets/img/clarita.jpg',
          precio: ['$80.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/9H8c7JG67iCSwhJWA',
          alt: 'Finca Clarita',
      },
      {
          title: 'FINCA CUNE EFECUN',
          description: 'Hermosa cabañas campestre, ubicada a 15 minutos de Villeta cuenta con 4 cabañas con baño privado, piscina, jacuzzi, BBQ, amplias zonas verdes con capacidad de 20 personas, tiene un precio de 80.000 por persona por noche.',
          image: '../../../assets/img/efecun.jpg',
          precio: ['$80.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/TniNmcA7yU76hF8P8',
          alt: 'Finca Cune Efecun',
      },
      {
          title: 'FINCA MANI ALTO',
          description: 'Tenemos disponible esta hermosa finca a 10 minutos de Villeta, amplia y lujosa, cuenta con 6 habitaciones, piscina, Jacuzzi, sala, comedor.',
          image: '../../../assets/img/mani-alto.jpg',
          precio: ['$120.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/kJsZZmKrDKXfBjWJ9',
          alt: 'Finca Mani Alto',
      },
      {
          title: 'FINCA CUNE PLAY 5',
          description: 'Finca ubicada a 15 minutos de Villeta cuenta con 4 habitaciones familiares, sala, comedor, cocina, piscina, BBQ.',
          image: '../../../assets/img/play-5.jpg',
          precio: ['$75.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/hnrxkJzwrJADVVXA6',
          alt: 'Finca Cune Play 5',
      },
      {
          title: 'HOTEL SAN ANTONIO 1',
          description: 'Cuenta con 6 apartamentos para 40 personas, 5 apartamentos con dos habitaciones, sala, comedor, baño y cocina equipada cada uno; uno con dos Baños y balcón;  un apartamento con tres Habitaciones, dos baños y balcón. Parquedero, bbq, billar y piscina.',
          image: '../../../assets/img/hoten-santonio-1.jpg',
          precio: ['$3.500.000 x Noche', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/UxGDxhjpCrEPMnzN9',
          alt: 'Hotel San Antonio 1',
      },
      {
          title: 'FINCA CUNE 4',
          description: 'Amplia finca campestre ubicada a 10 minutos del centro de Villeta, grandes zonas verdes, 4 habitaciones sencillas, piscina, zona BBQ, cocina y parqueadero, tiene un precio de 70.000 por persona por noche.',
          image: '../../../assets/img/cune-4.jpg',
          precio: ['$70.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/6npeHpy9V36Ezb3L9',
          alt: 'Finca Cune 4',
      },
      {
          title: 'FINCA CUNE PLEY 2',
          description: 'Hermosa finca campestre ubicada a 10 minutos del centro de Villeta, cuenta with 4 habitaciones familiares dos with baño privado, cocina, sala comedor, Quisco, pisicna, jacuzzi, próximamente zona BBQ y amplias zonas verdes.',
          image: '../../../assets/img/pley-2.jpg',
          precio: ['$75.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/ERQjwTEtMriBvT16A',
          alt: 'Finca Cune Pley 2',
      },
      {
          title: 'FINCA RECREO',
          description: 'Hermosa casa quinta, ubicada a 6 cuadras del parque principal, cuenta con pisicna, zona BBQ, parqueadero, 3 habitaciones, cocina y sala comedor.',
          image: '../../../assets/img/recreo.jpg',
          precio: ['$80.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/foSrZSBdLM1dNcBy8',
          alt: 'Finca Recreo',
      },
      {
          title: 'FINCA Y REYES',
          description: 'Moderna finca ubicada a 5 minutos del centro de Villeta, cuenta with 2 habitaciones capacity 8 personas, sala, comedor, cocina, piscina pequeña, zona BBQ.',
          image: '../../../assets/img/reyes.jpg',
          precio: ['$800.000 x NOCHE', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/FCuDdvhYpzNpFicA6',
          alt: 'Finca Y Reyes',
      },
      {
          title: 'CASA CENTRO',
          description: 'Disponible esta hermosa casa quinta, con capacity máxima de 15 personas, cuenta with 3 habitaciones, sala, comedor, cocina, pisicna, jacuzzi, asador y parqueadero.',
          image: '../../../assets/img/c-centro.jpg',
          precio: ['$75.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/K3g2WHMip1jawwCz8',
          alt: 'Casa Centro',
      },
      {
          title: 'FINCA VCP',
          description: 'Hermosa finca campestre ubicada a 3 cuadras del parque principal de Villeta, cuenta with 4 habitaciones sencillas, piscina grande y pequeña, zona BBQ, cancha múltiple, mesa de billar, zonas verdes y parqueadero.',
          image: '../../../assets/img/vcp.jpg',
          precio: ['$80.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/wmiAfAreVTV1PcAx5',
          alt: 'Finca VCP',
      },
      {
          title: 'VILLA ALEJ CUNE',
          description: 'Hermosa finca campestre, ubicada a 25 minutos del centro de Villeta, cuenta with 9 habitaciones with baño privado, pisicna, jacuzzi, zona BBQ, lago, Quisco, parqueadero y amplias zonas verdes.',
          image: '../../../assets/img/villa-alej.jpg',
          precio: ['$75.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/QRuEfMMBy1bGpMM49',
          alt: 'Villa Alej Cune',
      },
      {
          title: 'FINCA MANI BAJO 2',
          description: 'Hermosa finca ubicada a 5 minutos del centro de Villeta, cuenta con 10 habitaciones familiares para 60 personas, pisicna, zonas verdes, zona BBQ, banquitas, boliplaya, cancha de tejo y mesa de billar y billar Pool',
          image: '../../../assets/img/mani-bajo-2.jpg',
          precio: ['$70.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/Wpd8Lr43hzPeC1g29',
          alt: 'Finca Mani Bajo 2',
      },
      {
          title: 'FINCA SAJ MA',
          description: 'Hermosa finca campestre ubicada a 10 minutos del centro de Villeta, cuenta with 4 habitaciones familiares, pisicna, Quisco, cocina, asador and parqueadero',
          image: '../../../assets/img/saj-ma.jpg',
          precio: ['$70.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/Z9ejBSN4VskFqxKU9',
          alt: 'Finca Saj Ma',
      },
      {
          title: 'CASA MANI BAJO 1',
          description: 'Hermosa finca ubicada a 5 minutos del centro de villeta, cuenta con 5 habitaciones, sala comedor, cocina, zona BBQ, piscina.',
          image: '../../../assets/img/mani-bajo-1.jpg',
          precio: ['$100.000 x Persona', '$50.000 Aseo'],
          link: 'https://photos.app.goo.gl/ePQyKPGKKqFPSwZk9',
          alt: 'Casa Mani Bajo 1',
      },
      {
        title: 'FINCA CUNE MERCEDES',
        description: 'Finca ubicada a unos 20 minutos del centro de Villeta, con buen acceso, amplias zonas verdes, cuenta con zona BBQ un gran salón, canchas de tejo, miniteno, boolirrana, 5 habitaciones familiares con capacidad máxima de 20 personas, parqueadero y piscina.',
        image: '../../../assets/img/cune-mercedes.jpg',
        precio: ['$70.000 x Persona', '$50.000 Aseo'],
        link: 'https://photos.app.goo.gl/uqopr6jTenQWPukx8',
        alt: 'Imagen de Finca Cune Mercedes'
      },
      {
        title: 'CASA SAN ANTONIO',
        description: 'Hermosa casa quinta ubicada a 5 minutos del centro de Villeta, cuenta con cuatro habitaciones, sala, comedor, cocina y piscina.',
        image: '../../../assets/img/casa-santonio.jpg',
        precio: ['$70.000 x Persona', '$50.000 Aseo'],
        link: 'https://photos.app.goo.gl/ARVKm4TbEfHmgc5B7',
        alt: 'Imagen de Casa San Antonio'
      },
      {
        title: 'CASA FERNANDO SALAZAR 3',
        description: 'Hermosa finca ubicada a 5 minutos del centro de Villeta, cuenta con 5 habitaciones con capacidad máxima de 20 personas, sala, comedor, cocina, parqueadero, pisicna, BBQ y mesa de billar.',
        image: '../../../assets/img/casa-fernando-3.jpg',
        precio: ['$80.000 x Persona', '$50.000 Aseo'],
        link: 'https://photos.app.goo.gl/wC6h4sojKZpikrX59',
        alt: 'Imagen de Casa Fernando Salazar 3'
      },
      {
        title: 'FINCA F. SALAZAR 6',
        description: 'Hermosa finca campestre para 25 personas, ubicada a 5 minutos del centro de Villeta, cuenta con 5 habitaciones con cama doble y camarote, tv, baño, balcón, cabaña múltiple con tv y baño, salón, baño social, cocina con BBQ y parqueadero.',
        image: '../../../assets/img/finca-fernando-6.jpg',
        precio: ['$80.000 x Persona', '$50.000 Aseo'],
        link: 'https://photos.app.goo.gl/du3xPhZsMtcQcpza7',
        alt: 'Imagen de Finca F. Salazar 6'
      },
      {
        title: 'FINCA EL EMJO 3',
        description: 'Tengo esta finca a 15 minutos del centro, cuenta con 4 cabañas, cada una para 6 personas, capacidad máxima de 26, cuenta con piscina, asador, parqueadero, pin pong, rana, boliplaya, amplias zonas verdes',
        image: '../../../assets/img/emjo-3.jpg',
        precio: ['$75.000 x Persona', '$50.000 Aseo'],
        link: 'https://photos.app.goo.gl/mBa2JvCtRcYTKkxG6',
        alt: 'Imagen de Finca El Emjo 3'
      },
      {
        title: 'FINCA EMJO W5',
        description: 'Hermosa finca campestre ubicada a 10 minutos del centro de Villeta, cuenta con 6 habitaciones familiares capacidad máxima de 15 personas, cocina, zona BBQ, piscina, kiosco, zona de billar, rana, maquinas de ejercicio, cancha de tenis y amplias zonas verdes',
        image: '../../../assets/img/emjo-w-5.jpg',
        precio: ['$80.000 x Persona', '$50.000 Aseo'],
        link: 'https://photos.app.goo.gl/ZkhAouGqUqCfy1QY8',
        alt: 'Imagen de Finca Emjo W5'
      },
      {
        title: 'FINCA EL EMBRUJO AI 6',
        description: 'Hermosa finca ubicada a 20 minutos del centro de Villeta, cuenta con 4 habitaciones grandes, 3 baños, cocina, ventiladores, zona BBQ, asadero y piscina, bolirana, amplias zonas verdes.',
        image: '../../../assets/img/emjo-ai-6.jpg',
        precio: ['$75.000 x Persona', '$50.000 Aseo'],
        link: 'https://photos.app.goo.gl/4GQdxKiVx4Thxe8fA',
        alt: 'Imagen de Finca El Embrujo AI 6'
      },
      {
        title: 'FINCA TIERRA GRATA',
        description: 'Finca campestre ubicada a 5 minutos del centro de Villeta, cuenta con 3 habitaciones una con baño privado, capacidad de 30 persona, un baño social arriba y abajo, comedor, sala, cocina, dos terrazas, bolirrana y rana, tejo y parqueadero',
        image: '../../../assets/img/tierra-grata.jpg',
        precio: ['$70.000 x Persona', '$50.000 Aseo'],
        link: 'https://photos.app.goo.gl/PABeRRSkmhUMExHD8',
        alt: 'Imagen de Finca Tierra Grata'
      },
      {
        title: 'CABAÑAS DON PEDRO',
        description: 'Sin descripción 😢',
        image: '',
        precio: ['$1.200.000 x NOCHE', '$50.000 Aseo'],
        link: 'https://danieldct.github.io/Calculadora-JS/',
        alt: 'Imagen de Cabañas Don Pedro'
      },
      {
        title: 'FINCA LA VERDE 2',
        description: 'Hermosa finca campestre a 15 minutos del centro de Villeta, cuenta con 4 habitaciones, cocina, BBQ, piscina estructural.',
        image: '../../../assets/img/la-verde-2.jpg',
        precio: ['$65.000 x Persona', '$50.000 Aseo'],
        link: 'https://photos.app.goo.gl/sgp4SmixhsHR873x6',
        alt: 'Imagen de Finca La Verde 2'
      },
      {
        title: 'FINCA CUNE 6',
        description: 'Sin descripción 😢',
        image: '',
        precio: ['$75.000 x Persona', '$50.000 Aseo'],
        link: 'https://danieldct.github.io/Calculadora-JS/',
        alt: 'Imagen de Finca Cune 6'
      },
      {
        title: 'FINCA LA MAYITA 2',
        description: 'Sin descripción 😢',
        image: '',
        precio: ['$75.000 x Persona', '$50.000 Aseo'],
        link: 'https://danieldct.github.io/Calculadora-JS/',
        alt: 'Imagen de Finca La Mayita 2'
      },
      {
        title: 'FINCA ABR',
        description: 'Sin descripción 😢',
        image: '',
        precio: ['$130.000 x Persona', '$50.000 Aseo'],
        link: 'https://danieldct.github.io/Calculadora-JS/',
        alt: 'Imagen de Finca ABR'
      },
      {
        title: 'FINCA BAGAZAL',
        description: 'Sin descripción 😢',
        image: '',
        precio: ['$120.000 x Persona', '$50.000 Aseo'],
        link: 'https://danieldct.github.io/Calculadora-JS/',
        alt: 'Imagen de Finca Bagazal'
      }
      ];
    }
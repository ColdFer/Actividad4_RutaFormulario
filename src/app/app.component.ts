import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RutaFormulario';
  nombre: string = 'FeRNandO';
  PI:number=Math.PI;
  fecha:Date=new Date();
  lenguajes: string[] = ['python', 'java', 'c#', 'Java Script'];
  lenguajeAleatorio: string;
  constructor() {
    this.lenguajeAleatorio = this.seleccionarLenguaje();
  }
  seleccionarLenguaje(): string {
    const indiceAleatorio = Math.floor(Math.random() * this.lenguajes.length);
    return this.lenguajes[indiceAleatorio];
  }
  valorPromesa = new Promise<string>((resolve)=> {
    setTimeout(() =>{
      resolve('llego la data');
    }, 4500);
  });
  persona={
    nombre: 'Fernando',
    Paterno: 'MaYORga',
    edad: 19,
    direccion: {
      calle: 'PIN',
      casa: 8
    }
  }

}

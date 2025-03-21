import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [ UpperCasePipe ],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  name = signal('Ironman');  // 'Ironman' es el valor inicial
  age = signal(45);  // 45 es el valor inicial

  heroDescription = computed( () => {
    const description = `${this.name()} - ${this.age()}`; // Si haces ${this.age} saldrá así > [Signal: 45].
    return description;
  });

  capitalizedName = computed( () => this.name().toUpperCase() );

  // Función para obtener la descripción del héroe
  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;  // Devuelve el nombre y la edad concatenados
  }

  changeHero() {
    this.name.set('Spiderman');  // Actualiza el valor de 'name' a 'Spiderman'
    this.age.set(22);  // Actualiza el valor de 'age' a 22
  }

  resetForm() {
    this.name.set('Ironman');  // Resetea 'name' a 'Ironman'
    this.age.set(45);  // Resetea 'age' a 45
  }

  changeAge() {
    this.age.update(() => 60);  // Cambia el valor de 'age' a 60
  }

}

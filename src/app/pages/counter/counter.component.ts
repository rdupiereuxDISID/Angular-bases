import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CounterComponent {
  counter = 10;  // Inicializando el contador en 10
  counterSignal = signal(10)

  constructor() {

    //
    /*
    setInterval(() => {
      this.counterSignal.update( (v) => v + 1 );
      console.log('Tick');
    }, 2000);
    */

  }

  // Método para incrementar o decrementar el contador
  increaseBy(value: number) {
    this.counter += value;

    //this.counterSignal.set(this.counterSignal() + value); // No se recomienda.
    this.counterSignal.update(( current ) => current + value);
  }

  // Método para resetear el contador a 0
  resetCounter(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HomeComponentComponent],
  template: `
    <main>
      <header class="brand-name">
        <h1>Learn Angular</h1>
      </header>
      <section class="content">
        <app-home-component></app-home-component>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Homes';
}

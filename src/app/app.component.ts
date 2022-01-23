import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent {

	adios = 0;

	hola (hola: number): number {
		let manten = 0;
		for (let i = 0; i < 1; i += 1) {
			manten += manten;
		}

		return this.adios + hola + manten;
	}
}

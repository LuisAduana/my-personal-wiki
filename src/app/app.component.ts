import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav/sidenav.d';
import { Router } from '@angular/router';

export interface IIssues {
	icon: string;
	name: string;
	description: string;
	updated: Date;
	path: string;
	disabled: boolean;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent {
	@ViewChild('sidenav') sidenav: MatSidenav;

	linuxIssues: IIssues[] = [
		{
			icon: 'report_problem',
			name: 'Repositorios rotos',
			description: 'Este error ocurre cuando la instalación de un nuevo paquete es abortada mediante un problema de conexión a internet.',
			updated: new Date('1/1/22'),
			path: 'break-repository',
			disabled: false,
		},
		{
		icon: 'perm_identity',
		name: 'Auth al guardar archivo',
		description: 'Este problema ocurre cuando diferentes niveles de usuario trabajan en un mismo directorio.',
		updated: new Date('1/17/22'),
		path: '',
		disabled: false,
		},
		{
		icon: 'rss_feed',
		name: 'Crear zona de anclaje',
		description: 'Sirve para crear una zona de anclaje y compartir wifi.',
		updated: new Date('1/28/22'),
		path: 'hotspot-wifi',
		disabled: false,
	}];
	windowsIssues: IIssues[] = [{
		icon: 'block',
		name: 'En desarrollo...',
		description: 'Esta vista está en proceso de desarrollo.',
		updated: new Date('1/23/22'),
		path: '',
		disabled: true,
	}];

	constructor (private router: Router) { }

	selectOption (issue: IIssues): void {
		this.sidenav.close();
		this.router.navigate([issue.path]);
	}

}

import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav/sidenav.d';
import { Router } from '@angular/router';

export interface IIssues {
	icon: string;
	name: string;
	updated: Date;
	path: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
})
export class AppComponent {
	@ViewChild('sidenav') sidenav: MatSidenav;

	linuxIssues: IIssues[] = [
		{ icon: 'report_problem', name: 'Repositorios rotos', updated: new Date('1/1/22'), path: 'break-repository' },
		{ icon: 'perm_identity', name: 'Requiere Auth al guardar archivo', updated: new Date('1/17/22'), path: '' },
		{ icon: 'rss_feed', name: 'Crear Zona de Anclaje', updated: new Date('1/28/22'), path: '' },
	];
	windowsIssues: IIssues[] = [
		{ icon: 'block', name: 'En desarrollo...', updated: new Date('1/23/22'), path: '' },
	];

	constructor (private router: Router) { }

	selectOption (issue: IIssues): void {
		this.sidenav.close();
		this.router.navigate([issue.path]);
	}

}

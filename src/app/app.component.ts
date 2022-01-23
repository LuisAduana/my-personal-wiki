import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav/sidenav.d';
import { Router } from '@angular/router';

export interface IIssues {
	icon: string;
	name: string;
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
		{ icon: 'report_problem', name: 'Repositorios rotos', updated: new Date('1/1/22'), path: 'break-repository', disabled: false },
		{ icon: 'perm_identity', name: 'Auth al guardar archivo', updated: new Date('1/17/22'), path: '', disabled: true },
		{ icon: 'rss_feed', name: 'Crear zona de anclaje', updated: new Date('1/28/22'), path: 'hotspot-wifi', disabled: false },
	];
	windowsIssues: IIssues[] = [
		{ icon: 'block', name: 'En desarrollo...', updated: new Date('1/23/22'), path: '', disabled: true },
	];

	constructor (private router: Router) { }

	selectOption (issue: IIssues): void {
		this.sidenav.close();
		this.router.navigate([issue.path]);
	}

}

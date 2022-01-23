import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakReposirotyComponent } from './components/break-reposiroty/break-reposiroty.component';

const routes: Routes = [
	{ path: 'break-repository', component: BreakReposirotyComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			routes,
			{ enableTracing: true },
		),
	],
})
export class AppRoutingModule { }

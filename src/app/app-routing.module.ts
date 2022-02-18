import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakReposirotyComponent } from './components/break-reposiroty/break-reposiroty.component';
import { HotspotWifiComponent } from './components/hotspot-wifi/hotspot-wifi.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'break-repository', component: BreakReposirotyComponent },
	{ path: 'hotspot-wifi', component: HotspotWifiComponent },
];

@NgModule({	imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ] })
export class AppRoutingModule { }

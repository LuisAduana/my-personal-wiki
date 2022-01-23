import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakReposirotyComponent } from './break-reposiroty.component';

describe('BreakReposirotyComponent', (): void => {
	let component: BreakReposirotyComponent;
	let fixture: ComponentFixture<BreakReposirotyComponent>;

	beforeEach(async (): void => {
		await TestBed.configureTestingModule({
			declarations: [ BreakReposirotyComponent ],
		})
		.compileComponents();
	});

	beforeEach((): void => {
		fixture = TestBed.createComponent(BreakReposirotyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', (): void => {
		expect(component).toBeTruthy();
	});
});

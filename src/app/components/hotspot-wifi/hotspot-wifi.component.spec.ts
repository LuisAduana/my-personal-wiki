import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotWifiComponent } from './hotspot-wifi.component';

describe('HotspotWifiComponent', () => {
  let component: HotspotWifiComponent;
  let fixture: ComponentFixture<HotspotWifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotspotWifiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspotWifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

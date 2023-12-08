import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutinfoComponent } from './aboutinfo.component';

describe('AboutinfoComponent', () => {
  let component: AboutinfoComponent;
  let fixture: ComponentFixture<AboutinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

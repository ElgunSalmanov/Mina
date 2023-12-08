import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusinfoComponent } from './susinfo.component';

describe('SusinfoComponent', () => {
  let component: SusinfoComponent;
  let fixture: ComponentFixture<SusinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SusinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SusinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

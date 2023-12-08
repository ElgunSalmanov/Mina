import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauraComponent } from './laura.component';

describe('LauraComponent', () => {
  let component: LauraComponent;
  let fixture: ComponentFixture<LauraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LauraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LauraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

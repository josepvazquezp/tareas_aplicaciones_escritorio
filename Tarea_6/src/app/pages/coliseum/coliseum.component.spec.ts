import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColiseumComponent } from './coliseum.component';

describe('ColiseumComponent', () => {
  let component: ColiseumComponent;
  let fixture: ComponentFixture<ColiseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColiseumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColiseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

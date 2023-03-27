import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PazariComponent } from './pazari.component';

describe('PazariComponent', () => {
  let component: PazariComponent;
  let fixture: ComponentFixture<PazariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PazariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PazariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

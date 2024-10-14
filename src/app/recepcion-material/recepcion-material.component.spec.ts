import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionMaterialComponent } from './recepcion-material.component';

describe('RecepcionMaterialComponent', () => {
  let component: RecepcionMaterialComponent;
  let fixture: ComponentFixture<RecepcionMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepcionMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcionMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesAlmacenadosComponent } from './materiales-almacenados.component';

describe('MaterialesAlmacenadosComponent', () => {
  let component: MaterialesAlmacenadosComponent;
  let fixture: ComponentFixture<MaterialesAlmacenadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialesAlmacenadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialesAlmacenadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

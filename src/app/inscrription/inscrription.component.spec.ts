import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrriptionComponent } from './inscrription.component';

describe('InscrriptionComponent', () => {
  let component: InscrriptionComponent;
  let fixture: ComponentFixture<InscrriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscrriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscrriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

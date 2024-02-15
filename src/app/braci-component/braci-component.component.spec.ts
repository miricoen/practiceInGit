import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraciComponentComponent } from './braci-component.component';

describe('BraciComponentComponent', () => {
  let component: BraciComponentComponent;
  let fixture: ComponentFixture<BraciComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BraciComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BraciComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

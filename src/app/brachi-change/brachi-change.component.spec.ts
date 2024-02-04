import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrachiChangeComponent } from './brachi-change.component';

describe('BrachiChangeComponent', () => {
  let component: BrachiChangeComponent;
  let fixture: ComponentFixture<BrachiChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrachiChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrachiChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

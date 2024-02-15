import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvoritiChangeComponent } from './dvoriti-change.component';

describe('DvoritiChangeComponent', () => {
  let component: DvoritiChangeComponent;
  let fixture: ComponentFixture<DvoritiChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DvoritiChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DvoritiChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

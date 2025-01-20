import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsComponentComponent } from './formations-component.component';

describe('FormationsComponentComponent', () => {
  let component: FormationsComponentComponent;
  let fixture: ComponentFixture<FormationsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarBackgroundComponentComponent } from './star-background-component.component';

describe('StarBackgroundComponentComponent', () => {
  let component: StarBackgroundComponentComponent;
  let fixture: ComponentFixture<StarBackgroundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarBackgroundComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarBackgroundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

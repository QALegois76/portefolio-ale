import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesComponentComponent } from './competences-component.component';

describe('CompetencesComponentComponent', () => {
  let component: CompetencesComponentComponent;
  let fixture: ComponentFixture<CompetencesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetencesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

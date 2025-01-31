import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceItemComponent } from './competence-item.component';

describe('CompetenceItemComponent', () => {
  let component: CompetenceItemComponent;
  let fixture: ComponentFixture<CompetenceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenceItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

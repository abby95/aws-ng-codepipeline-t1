import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildInteractionComponent } from './parent-child-interaction.component';

describe('ParentChildInteractionComponent', () => {
  let component: ParentChildInteractionComponent;
  let fixture: ComponentFixture<ParentChildInteractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentChildInteractionComponent]
    });
    fixture = TestBed.createComponent(ParentChildInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

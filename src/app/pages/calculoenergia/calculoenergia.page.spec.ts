import { ComponentFixture, TestBed } from '@angular/core/testing';
import { calculoenergiapage } from './calculoenergia.page';

describe('CalculoenergiaPage', () => {
  let component: calculoenergiapage;
  let fixture: ComponentFixture<calculoenergiapage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(calculoenergiapage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

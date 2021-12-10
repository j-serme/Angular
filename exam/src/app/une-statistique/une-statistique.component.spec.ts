import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneStatistiqueComponent } from './une-statistique.component';

describe('UneStatistiqueComponent', () => {
  let component: UneStatistiqueComponent;
  let fixture: ComponentFixture<UneStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UneStatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UneStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

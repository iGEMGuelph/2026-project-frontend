import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieCircleChart } from './pie-circle-chart';

describe('PieCircleChart', () => {
  let component: PieCircleChart;
  let fixture: ComponentFixture<PieCircleChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieCircleChart],
    }).compileComponents();

    fixture = TestBed.createComponent(PieCircleChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

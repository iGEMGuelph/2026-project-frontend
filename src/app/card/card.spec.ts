import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from './card';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default values', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Potato');
    expect(fixture.nativeElement.textContent).toContain('14 Days');
    expect(fixture.nativeElement.textContent).toContain('Needs Attention');
  });

  it('should display custom input values', () => {
    fixture.componentRef.setInput('title', 'Tomato');
    fixture.componentRef.setInput('CropYield', '7 Days');
    fixture.componentRef.setInput('Status', 'Healthy');
    fixture.componentRef.setInput('Temp', '75°F');
    fixture.componentRef.setInput('Biomss', '80%');
    fixture.componentRef.setInput('pH', '6');

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Tomato');
    expect(fixture.nativeElement.textContent).toContain('7 Days');
    expect(fixture.nativeElement.textContent).toContain('Healthy');
    expect(fixture.nativeElement.textContent).toContain('75°F');
    expect(fixture.nativeElement.textContent).toContain('80%');
    expect(fixture.nativeElement.textContent).toContain('6');
  });

  it('should set image src and alt attributes', () => {
    fixture.componentRef.setInput('title', 'Potato');
    fixture.componentRef.setInput('Img', 'Potato.jpg');

    fixture.detectChanges();

    const image = fixture.nativeElement.querySelector('img');

    expect(image.src).toContain('Potato.jpg');
    expect(image.alt).toBe('Potato');
  });

  it('should apply healthy status class', () => {
    fixture.componentRef.setInput('Status', 'Healthy');

    fixture.detectChanges();

    const status = fixture.nativeElement.querySelector('.status-healthy');

    expect(status).toBeTruthy();
    expect(status.textContent).toContain('Healthy');
  });

  it('should apply attention status class', () => {
    fixture.componentRef.setInput('Status', 'Needs Attention');

    fixture.detectChanges();

    const status = fixture.nativeElement.querySelector('.status-attention');

    expect(status).toBeTruthy();
    expect(status.textContent).toContain('Needs Attention');
  });

  it('should apply default status class for unknown status', () => {
    fixture.componentRef.setInput('Status', 'Something Else');

    fixture.detectChanges();

    const status = fixture.nativeElement.querySelector('.status-default');

    expect(status).toBeTruthy();
    expect(status.textContent).toContain('Something Else');
  });

});
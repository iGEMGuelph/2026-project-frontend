import { TestBed } from '@angular/core/testing';
import { Showcase } from './showcase';

describe('Showcase', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showcase],
    }).compileComponents();
  });

  it('should create the showcase page', () => {
    const fixture = TestBed.createComponent(Showcase);
    const showcase = fixture.componentInstance;

    expect(showcase).toBeTruthy();
  });

  it('should render the component library heading', () => {
    const fixture = TestBed.createComponent(Showcase);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent)
      .toContain('Lumifert Component Library');
  });
});
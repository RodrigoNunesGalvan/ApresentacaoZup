import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinaReadComponent } from './vacina-read.component';

describe('VacinaReadComponent', () => {
  let component: VacinaReadComponent;
  let fixture: ComponentFixture<VacinaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

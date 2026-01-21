import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msg } from './msg';

describe('Msg', () => {
  let component: Msg;
  let fixture: ComponentFixture<Msg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Msg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

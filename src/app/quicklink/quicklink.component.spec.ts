import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicklinkComponent } from './quicklink.component';

describe('QuicklinkComponent', () => {
  let component: QuicklinkComponent;
  let fixture: ComponentFixture<QuicklinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuicklinkComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(QuicklinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

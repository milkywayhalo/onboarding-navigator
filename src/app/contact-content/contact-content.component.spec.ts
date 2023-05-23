import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactContentComponent } from './contact-content.component';

describe('ContactContentComponent', () => {
  let component: ContactContentComponent;
  let fixture: ComponentFixture<ContactContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactContentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

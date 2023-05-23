import { ComponentFixture, TestBed } from '@angular/core/testing';
import { screen } from '@testing-library/angular';
import { ViewComponent } from './view.component';
import { ContactContentComponent } from '../contact-content/contact-content.component';
import { TodoComponent } from '../todo/todo.component';
import { QuicklinkComponent } from '../quicklink/quicklink.component';
import userEvent from '@testing-library/user-event';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewComponent, ContactContentComponent, TodoComponent, QuicklinkComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire a click event', () => {
    spyOn(component, 'selectApprenticeshipField');
    const htmlButton: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    htmlButton.click();
    expect(component.selectApprenticeshipField).toHaveBeenCalled();
  });

  it('should open software developer specific todo list', () => {
    const button = screen.getByRole('button', {
      name: /fachinformatiker für anwendungsentwicklung/i
    });
    userEvent.click(button);
    fixture.detectChanges();

    const linkForSoftwareDeveloper = screen.getByRole('link', {
      name: /guilde\-frontend meetup/i
    });
    const linkForSystemIntegrator = screen.queryByRole('link', {
      name: /system engineers chapter/i
    });

    expect(linkForSoftwareDeveloper).toBeTruthy();
    expect(linkForSystemIntegrator).toBeFalsy();
  });

  it('should open systemintegrator specific todo list', () => {
    const button = screen.getByRole('button', {
      name: /fachinformatiker für systemintegration/i
    });
    userEvent.click(button);
    fixture.detectChanges();

    const linkForSoftwareDeveloper = screen.queryByRole('link', { name: /guilde\-frontend meetup/i });
    const linkForSystemIntegrator = screen.getByRole('link', { name: /system engineers chapter/i });

    expect(linkForSoftwareDeveloper).toBeFalsy();
    expect(linkForSystemIntegrator).toBeTruthy();
  });
});

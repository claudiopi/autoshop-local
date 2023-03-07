import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxSelectModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxCardModule, IgxCardModule, IgxCardModule, IgxCardModule, IgxCardModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxSelectModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxCardModule, IgxCardModule, IgxCardModule, IgxCardModule, IgxCardModule, IgxCardModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

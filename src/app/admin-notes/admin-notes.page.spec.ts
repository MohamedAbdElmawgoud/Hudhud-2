import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminNotesPage } from './admin-notes.page';

describe('AdminNotesPage', () => {
  let component: AdminNotesPage;
  let fixture: ComponentFixture<AdminNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientNotesPage } from './client-notes.page';

describe('ClientNotesPage', () => {
  let component: ClientNotesPage;
  let fixture: ComponentFixture<ClientNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientNotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

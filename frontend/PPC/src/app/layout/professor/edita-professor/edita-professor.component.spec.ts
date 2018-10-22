import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { EditaCursoComponent } from './edita-professor.component'
import { EditaCursoModule } from './edita-professor.module'

describe('EditaCursoComponent', () => {
  let component: EditaCursoComponent
  let fixture: ComponentFixture<EditaCursoComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          EditaCursoModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaCursoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

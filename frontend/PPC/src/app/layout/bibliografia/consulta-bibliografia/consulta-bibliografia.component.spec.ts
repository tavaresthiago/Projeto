import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ConsultaCursoComponent } from './consulta-bibliografia.component'
import { ConsultaCursoModule } from './consulta-bibliografia.module'

describe('ConsultaCursoComponent', () => {
  let component: ConsultaCursoComponent
  let fixture: ComponentFixture<ConsultaCursoComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ConsultaCursoModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCursoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

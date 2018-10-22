import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ConsultaDisciplinaComponent } from './consulta-disciplina.component'
import { ConsultaDisciplinaModule } from './consulta-disciplina.module'

describe('ConsultaDisciplinaComponent', () => {
  let component: ConsultaDisciplinaComponent
  let fixture: ComponentFixture<ConsultaDisciplinaComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ConsultaDisciplinaModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaDisciplinaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

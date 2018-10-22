import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ConsultaPlanoDeEnsinoComponent } from './consulta-plano-ensino.component'
import { ConsultaPlanoDeEnsinoModule } from './consulta-plano-ensino.module'

describe('ConsultaPlanoDeEnsinoComponent', () => {
  let component: ConsultaPlanoDeEnsinoComponent
  let fixture: ComponentFixture<ConsultaPlanoDeEnsinoComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ConsultaPlanoDeEnsinoModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPlanoDeEnsinoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

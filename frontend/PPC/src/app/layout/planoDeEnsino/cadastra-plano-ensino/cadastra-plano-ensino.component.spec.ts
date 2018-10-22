import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CadastraPlanoDeEnsinoComponent } from './cadastra-plano-ensino.component'
import { CadastraPlanoDeEnsinoModule } from './cadastra-plano-ensino.module'

describe('CadastraPlanoDeEnsinoComponent', () => {
  let component: CadastraPlanoDeEnsinoComponent
  let fixture: ComponentFixture<CadastraPlanoDeEnsinoComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CadastraPlanoDeEnsinoModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraPlanoDeEnsinoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

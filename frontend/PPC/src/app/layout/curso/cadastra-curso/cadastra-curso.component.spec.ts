import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CadastraCursoComponent } from './cadastra-curso.component'
import { CadastraCursoModule } from './cadastra-curso.module'

describe('CadastraCursoComponent', () => {
  let component: CadastraCursoComponent
  let fixture: ComponentFixture<CadastraCursoComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CadastraCursoModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraCursoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CadastraDisciplinaComponent } from './cadastra-disciplina.component'
import { CadastraDisciplinaModule } from './cadastra-disciplina.module'

describe('CadastraDisciplinaComponent', () => {
  let component: CadastraDisciplinaComponent
  let fixture: ComponentFixture<CadastraDisciplinaComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CadastraDisciplinaModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraDisciplinaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

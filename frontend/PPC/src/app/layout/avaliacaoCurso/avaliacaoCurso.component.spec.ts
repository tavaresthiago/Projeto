import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AvaliacaoCursoComponent } from './avaliacaoCurso.component'
import { AvaliacaoCursoModule } from './avaliacaoCurso.module'

describe('AvaliacaoCursoComponent', () => {
  let component: AvaliacaoCursoComponent
  let fixture: ComponentFixture<AvaliacaoCursoComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AvaliacaoCursoModule, RouterTestingModule, BrowserAnimationsModule]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoCursoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DisciplinaComponent } from './disciplina.component'
import { DisciplinaModule } from './disciplina.module'

describe('DisciplinaComponent', () => {
  let component: DisciplinaComponent
  let fixture: ComponentFixture<DisciplinaComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DisciplinaModule, RouterTestingModule, BrowserAnimationsModule]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ProfessorComponent } from './professor.component'
import { ProfessorModule } from './professor.module'

describe('ProfessorComponent', () => {
  let component: ProfessorComponent
  let fixture: ComponentFixture<ProfessorComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ProfessorModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

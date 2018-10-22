import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CursoComponent } from './curso.component'
import { CursoModule } from './curso.module'

describe('CursoComponent', () => {
  let component: CursoComponent
  let fixture: ComponentFixture<CursoComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CursoModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

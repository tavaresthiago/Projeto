import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { EditaPpcComponent } from './edita-ppc.component'
import { EditaPpcModule } from './edita-ppc.module'

describe('EditaPpcComponent', () => {
  let component: EditaPpcComponent
  let fixture: ComponentFixture<EditaPpcComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          EditaPpcModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPpcComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

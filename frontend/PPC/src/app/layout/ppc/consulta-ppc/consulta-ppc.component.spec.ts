import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ConsultaPpcComponent } from './consulta-ppc.component'
import { ConsultaPpcModule } from './consulta-ppc.module'

describe('ConsultaPpcComponent', () => {
  let component: ConsultaPpcComponent
  let fixture: ComponentFixture<ConsultaPpcComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          ConsultaPpcModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPpcComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

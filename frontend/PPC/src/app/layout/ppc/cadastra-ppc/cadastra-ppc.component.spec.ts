import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CadastraPpcComponent } from './cadastra-ppc.component'
import { CadastraPpcModule } from './cadastra-ppc.module'

describe('CadastraPpcComponent', () => {
  let component: CadastraPpcComponent
  let fixture: ComponentFixture<CadastraPpcComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CadastraPpcModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraPpcComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

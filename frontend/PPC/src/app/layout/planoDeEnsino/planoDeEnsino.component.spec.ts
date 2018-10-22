import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { PlanoDeEnsinoComponent } from './planoDeEnsino.component'
import { PlanoDeEnsinoModule } from './planoDeEnsino.module'

describe('PlanoDeEnsinoComponent', () => {
  let component: PlanoDeEnsinoComponent
  let fixture: ComponentFixture<PlanoDeEnsinoComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PlanoDeEnsinoModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoDeEnsinoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

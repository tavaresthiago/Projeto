import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { PpcComponent } from './ppc.component'
import { PpcModule } from './ppc.module'

describe('TablesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ PpcModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(PpcComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})

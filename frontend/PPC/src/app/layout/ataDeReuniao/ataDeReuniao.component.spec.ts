import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AtaDeReuniaoComponent } from './ataDeReuniao.component'
import { AtaDeReuniaoModule } from './ataDeReuniao.module'

describe('AtaDeReuniaoComponent', () => {
  let component: AtaDeReuniaoComponent
  let fixture: ComponentFixture<AtaDeReuniaoComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AtaDeReuniaoModule, RouterTestingModule, BrowserAnimationsModule]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AtaDeReuniaoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

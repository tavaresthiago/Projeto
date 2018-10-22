import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { CronogramaAtividadesComponent } from './cronogramaAtividades.component'
import { CronogramaAtividadesModule } from './cronogramaAtividades.module'

describe('CronogramaAtividadesComponent', () => {
  let component: CronogramaAtividadesComponent
  let fixture: ComponentFixture<CronogramaAtividadesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CronogramaAtividadesModule, RouterTestingModule, BrowserAnimationsModule]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CronogramaAtividadesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

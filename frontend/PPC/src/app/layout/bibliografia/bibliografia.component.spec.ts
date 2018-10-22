import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { BibliografiaComponent } from './bibliografia.component'
import { BibliografiaModule } from './bibliografia.module'

describe('BibliografiaComponent', () => {
  let component: BibliografiaComponent
  let fixture: ComponentFixture<BibliografiaComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          BibliografiaModule,
          RouterTestingModule,
          BrowserAnimationsModule,
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliografiaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

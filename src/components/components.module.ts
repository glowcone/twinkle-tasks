import { NgModule }       from '@angular/core';
import { IonicModule }    from 'ionic-angular';

import { ButtonItemDoneComponent } from './button-item-done/button-item-done';

const components = [
  ButtonItemDoneComponent,
]

@NgModule({
  imports: [
    IonicModule.forRoot(ButtonItemDoneComponent),
  ],
  declarations: [
    ...components
  ],
  entryComponents: [
  ],
  exports: [
    ...components
  ],
  providers: [
  ]
})

export class ComponentsModule { }

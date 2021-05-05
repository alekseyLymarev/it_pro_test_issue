import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './components/tree/tree.component';
import {CheckboxModule} from '../checkbox/checkbox.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    TreeComponent
  ],
  exports: [
    TreeComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule
  ]
})
export class TreeModule { }

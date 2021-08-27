import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../@shared';
import { ShellComponent } from './shell.component';



@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ShellModule { }

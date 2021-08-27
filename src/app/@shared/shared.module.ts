import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

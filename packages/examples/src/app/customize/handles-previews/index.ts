import { CustomPreview } from './custom-preview.component';
import { Handle } from './handle.component';
import { Container } from './container.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DndModule } from 'angular-hovercraft';
@NgModule({
  declarations: [
    CustomPreview, Handle, Container
  ],
  imports: [
    CommonModule,
    DndModule,
    RouterModule.forChild([{ path: '', component: Container }])
  ],
})
export class HandlesPreviewsModule { }

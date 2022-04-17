import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { PageErrorComponent } from './page-error/page-error.component';

@NgModule({
  declarations: [HomeComponent, SobreComponent, PageErrorComponent],
  imports: [CommonModule],
  exports: [HomeComponent, SobreComponent, PageErrorComponent],
})
export class PagesModule {}

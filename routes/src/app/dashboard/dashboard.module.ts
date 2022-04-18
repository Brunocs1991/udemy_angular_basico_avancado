import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardRoutesModule } from './dashboard.routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DashboardRoutesModule],
})
export class DashboardModule {}

import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeComponent }];

export const DashboardRoutesModule = RouterModule.forChild(routes);

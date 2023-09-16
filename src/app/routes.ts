import { Routes } from "@angular/router";
import { HomeComponent } from "./home/components/home.component";
import { StarAdminComponent } from "./features/star-admin/components/star-admin.component";
import { StarDetailsComponent } from "./features/star-admin/components/star-details/star-details.component";
import { ShipAdminComponent } from "./features/ship-admin/components/ship-admin.component";
import StarAdminRoutes from "./features/star-admin/routes";

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Solarwind Admin'
  },
  {
    path: 'stars',
    component: StarAdminComponent,
    title: 'Star Admin',
    children: StarAdminRoutes
  },
  {
    path: 'ships',
    component: ShipAdminComponent,
    title: 'Ship Admin'
  }
];

export default routeConfig;
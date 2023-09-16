import { Routes } from "@angular/router"
import { StarDetailsComponent } from "./components/star-details/star-details.component"

const routeConfig: Routes = [
  {
    path: ':id',
    component: StarDetailsComponent,
    title: 'Star details'
  }
];

export default routeConfig;
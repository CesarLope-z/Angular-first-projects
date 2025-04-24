import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponentComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    }
  ];
  
  export default routeConfig;

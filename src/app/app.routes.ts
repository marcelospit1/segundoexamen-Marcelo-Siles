import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { Ui } from './ui/ui';

export const routes: Routes = [
   {
    path:'',
    component: Layout,
    children:[
        {
            path:'',
            component:Home,
            title:'Inicio'
        },
         { path: 'ui', component: Ui, title: 'Componentes de Ui' }
    ]
   }
];

import { Routes } from '@angular/router';
import { Home as HomePage } from '../app/modules/home/home';
import { Cart as CartPage } from '../app/modules/cart/cart';
export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Home Page'
    },
    {
        path: 'cart',
        component: CartPage,
        title: 'Cart'
    },
];

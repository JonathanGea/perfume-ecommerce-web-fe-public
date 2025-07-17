import { Routes } from '@angular/router';
import { Home as HomePage } from '../app/modules/home/home';
import { Cart as CartPage } from '../app/modules/cart/cart';
import { SplashScreen } from './modules/splash-screen/splash-screen';
export const routes: Routes = [
    {
        path: 'h',
        component: SplashScreen,
        title: 'welcome'
    },
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

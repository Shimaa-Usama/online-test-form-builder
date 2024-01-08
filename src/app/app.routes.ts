import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('./online-test/online-test.module').then((m) => m.OnlineTestModule),
    }
];

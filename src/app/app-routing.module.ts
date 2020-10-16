import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { NotFoundComponent } from './main/shared/components/not-found/not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: "auth",
        loadChildren: () =>
            import("./main/features/auth/auth.module").then(
                (m) => m.AuthModule
            )
    },
    {
        path: "dashboard",
        loadChildren: () =>
            import("./main/features/dashboard/dashboard.module").then(
                (m) => m.DashboardModule
            )
    },
    {
        path: "users-management",
        loadChildren: () =>
        import("./main/features/users-management/users-management.module").then(
            (m) => m.UsersManagementModule
        ),
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

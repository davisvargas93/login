



import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';




const appRoutes:  Routes = [

    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'account', component: AccountComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

export const APP_RUTES = RouterModule.forRoot (appRoutes, {useHash: true});

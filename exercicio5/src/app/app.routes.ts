import { Routes } from '@angular/router';
import { Head } from './head/head';

export const routes: Routes = [

{path: 'home', component: Head},
{path: '', redirectTo: 'home', pathMatch:  'full'}

];

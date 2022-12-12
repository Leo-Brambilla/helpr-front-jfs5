import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule),
    title: "Helpr | Login"
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [ AuthGuard ],
    title: "Helpr | Home"
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule),
    title: "Helpr | Clientes"
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule),
    title: "Helpr | Chamados"
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./views/funcionarios/funcionarios.module').then(m => m.FuncionariosModule),
    title: "Helpr | Funcionários"
  },
  {
    path: 'cargos',
    loadChildren: () => import('./views/cargos/cargos.module').then(m => m.CargosModule),
    title: "Helpr | Cargos"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

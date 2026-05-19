import { Routes } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';
import { ListaUsu } from './lista-usu/lista-usu';

export const routes: Routes = [
{path:"usuarios/:id",component:Usuarios},
{path: "lista", component:ListaUsu}

];

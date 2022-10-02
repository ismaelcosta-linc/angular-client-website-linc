import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroClienteComponent } from "./view/pages/cadastro-cliente/cadastro-cliente.component";
import { DevSistemasComponent } from "./view/pages/dev-sistemas/dev-sistemas.component";
import { IndexComponent } from "./view/pages/index/index.component";
import { LoginComponent } from "./view/pages/login/login.component";
import { LojaItemComponent } from "./view/pages/loja-item/loja-item.component";
import { LojaComponent } from "./view/pages/loja/loja.component";
import { ManutencaoComponent } from "./view/pages/manutencao/manutencao.component";
import { SuporteTecnicoComponent } from "./view/pages/suporte-tecnico/suporte-tecnico.component";

const app_routes: Routes = [
    {path: '', component: LojaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'loja', component: LojaComponent},
    {path: 'loja-item', component: LojaItemComponent},
    {path: 'desenvolvimento-de-sistemas', component: DevSistemasComponent},
    {path: 'manutencao-de-dispositivos', component: ManutencaoComponent},
    {path: 'suporte-tecnico', component: SuporteTecnicoComponent},
    {path: 'cadastro-cliente', component: CadastroClienteComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(app_routes);
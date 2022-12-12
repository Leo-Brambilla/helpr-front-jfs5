import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AvatarPipe } from '../../pipes/avatar.pipe';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';
import { DialogFuncionarioComponent } from './funcionarios/dialog-funcionario/dialog-funcionario.component';


@NgModule({
  declarations: [
    FuncionariosComponent,
    AvatarPipe,
    NewFuncionarioComponent,
    DialogFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FuncionariosModule { }

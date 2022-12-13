import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados/chamados.component';
import { NewChamadoComponent } from './new-chamado/new-chamado.component';
import { EditChamadoComponent } from './edit-chamado/edit-chamado.component';
import { DialogChamadoComponent } from './chamados/dialog-chamado/dialog-chamado.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ChamadosComponent,
    NewChamadoComponent,
    EditChamadoComponent,
    DialogChamadoComponent
  ],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class ChamadosModule { }
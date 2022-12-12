import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargosRoutingModule } from './cargos-routing.module';
import { CargosComponent } from './cargos/cargos.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCargoComponent } from './new-cargo/new-cargo.component';
import { EditCargosComponent } from './edit-cargos/edit-cargos.component';
import { DialogCargoComponent } from './cargos/dialog-cargo/dialog-cargo.component';



@NgModule({
  declarations: [
    CargosComponent,
    NewCargoComponent,
    EditCargosComponent,
    DialogCargoComponent

  ],
  imports: [
    CommonModule,
    CargosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CargosModule { }

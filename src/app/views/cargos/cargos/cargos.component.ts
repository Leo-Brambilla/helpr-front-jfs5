import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';
import { DialogCargoComponent } from './dialog-cargo/dialog-cargo.component';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'salario', 'editar', 'excluir', 'detalhes'];
  dataSource: Cargo[] = [];

  constructor(private cargoService: CargoService, public dialog: MatDialog) { }

  spinner: boolean = true

  ngOnInit(): void {
    this.initializeTable();
  }

    private initializeTable(): void {
    setTimeout(()=> this.cargoService.findAll().subscribe(cargos => {
      this.dataSource = cargos;
      this.spinner = false; 
      
  }), 500)
  }

  detalheCargo(cargo: Cargo): void {
    const dialogRef = this.dialog.open(DialogCargoComponent, {
      data: cargo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  
  

  public delete(id: number): void {
    let ok = confirm("Confirma a exclusao?");
    if(ok) {
      this.cargoService.delete(id).subscribe(() => {
        alert("Cargo EXCLUIDO!");
        this.initializeTable();
      });
    }
  }
}

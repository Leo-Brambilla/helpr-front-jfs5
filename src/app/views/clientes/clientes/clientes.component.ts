import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { MatDialog } from '@angular/material/dialog';
import { DialogClienteComponent } from './dialog-cliente/dialog-cliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'editar', 'excluir', 'detalhes'];
  dataSource: Cliente[] = [];

  constructor(private clienteService: ClienteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  detalheCliente(cliente: Cliente): void {
    const dialogRef = this.dialog.open(DialogClienteComponent, {
      data: cliente
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  private initializeTable(): void {
    this.clienteService.findAll().subscribe(clientes => {
      this.dataSource = clientes;
    });
  }

  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.clienteService.delete(id).subscribe(() => {
        alert("Cliente excluido.");
        this.initializeTable();
      });
    }
  }
}

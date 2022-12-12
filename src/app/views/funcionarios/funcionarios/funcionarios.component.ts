import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { DialogFuncionarioComponent } from './dialog-funcionario/dialog-funcionario.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'cargo', 'foto', 'editar', 'excluir', 'detalhes'];
  dataSource: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  detalheFuncionario(funcionario: Funcionario): void {
    const dialogRef = this.dialog.open(DialogFuncionarioComponent, {
      data: funcionario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  private initializeTable(): void {
    this.funcionarioService.findAll().subscribe(funcionarios => {
      this.dataSource = funcionarios;
    });
  }

  public delete(id: number): void {
    let ok = confirm("Tem certeza que deseja excluir?");
    if(ok) {
      this.funcionarioService.delete(id).subscribe(() => {
        alert("Funcionário excluido.");
        this.initializeTable();
      });
    }
  }

}

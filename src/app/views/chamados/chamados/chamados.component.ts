import { ChamadoService } from './../../../services/chamado.service';
import { Chamado } from './../../../models/chamado';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogChamadoComponent } from './dialog-chamado/dialog-chamado.component';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css']
})
export class ChamadosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'funcionario', 'dataAbertura', 'status', 'editar', 'detalhes'];
  dataSource: Chamado[] = [];

  constructor(private chamadoService: ChamadoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  detalheChamado(chamado: Chamado): void {
    const dialogRef = this.dialog.open(DialogChamadoComponent, {
      data: chamado
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  private initializeTable(): void {
    this.chamadoService.findAll().subscribe(chamados => {
      this.dataSource = chamados;
    });
  }
}

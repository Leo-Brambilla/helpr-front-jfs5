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
    
  spinner: boolean = true

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    setTimeout(()=> this.chamadoService.findAll().subscribe(chamados => {
      this.dataSource = chamados;
      this.spinner = false; 
      
  }), 500)
  }

  detalheChamado(chamado: Chamado): void {
    const dialogRef = this.dialog.open(DialogChamadoComponent, {
      data: chamado
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  
}

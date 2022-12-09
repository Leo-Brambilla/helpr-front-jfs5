import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chamado } from 'src/app/models/chamado';

@Component({
  selector: 'app-dialog-chamado',
  templateUrl: './dialog-chamado.component.html',
  styleUrls: ['./dialog-chamado.component.css']
})
export class DialogChamadoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogChamadoComponent>,
    @Inject(MAT_DIALOG_DATA) public chamado: Chamado 
  ) { }

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close();
  }

}

import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-dialog-funcionario',
  templateUrl: './dialog-funcionario.component.html',
  styleUrls: ['./dialog-funcionario.component.css']
})
export class DialogFuncionarioComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogFuncionarioComponent>,
    @Inject(MAT_DIALOG_DATA) public funcionario: Funcionario 
  ) { }

  ngOnInit(): void {
  } 

  fechar(): void {
    this.dialogRef.close();
  }

}

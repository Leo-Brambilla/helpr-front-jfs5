import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cargo } from 'src/app/models/cargo';

@Component({
  selector: 'app-dialog-cargo',
  templateUrl: './dialog-cargo.component.html',
  styleUrls: ['./dialog-cargo.component.css']
})
export class DialogCargoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogCargoComponent>,
    @Inject(MAT_DIALOG_DATA) public cargo: Cargo 
  ) { }

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close();
  }

}

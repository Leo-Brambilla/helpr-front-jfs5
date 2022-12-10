import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargoService } from './../../../services/cargo.service';
import { Cargo } from 'src/app/models/cargo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-cargo',
  templateUrl: './new-cargo.component.html',
  styleUrls: ['./new-cargo.component.css']
})
export class NewCargoComponent implements OnInit {

    public formCargo: FormGroup;

    constructor(
      formBuilder: FormBuilder,
      private cargoService: CargoService,
      private router: Router
    ) {
      this.formCargo = formBuilder.group({
        nome: ["", [Validators.required]],
        descricao: ["", [Validators.required]],
        salario: ["", [Validators.required]]
      })
    }

    ngOnInit(): void {
      // TODO document why this method 'ngOnInit' is empty
    }

    public create(): void {
      if(this.formCargo.valid) {
        const cargo: Cargo = this.formCargo.value;
        this.cargoService.create(cargo).subscribe(response => {
          alert("Cargo cadastrado!");
          this.router.navigate(["/cargos"]);
        });
      }
      else {
        alert("Dados inválidos.");
      }
    }
}

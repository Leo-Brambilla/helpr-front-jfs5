import { Cargo } from './../../../models/cargo';
import { CargoService } from './../../../services/cargo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from '../../../services/funcionario.service';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})

export class NewFuncionarioComponent implements OnInit {

  public formFuncionario: FormGroup
  public cargos: Cargo [] = []

  constructor(
    private cargoService: CargoService,
    formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {
    this.formFuncionario = formBuilder.group({
      nome: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      senha:['',[Validators.required]],
      cargo:['',[Validators.required]]
    })
  }


  ngOnInit(): void {
    this.initializeCargos();

  }
  private initializeCargos(): void{
    this.cargoService.findAll().subscribe(cargos =>{
      this.cargos = cargos
    })
  }
  public create():void{
    if(this.formFuncionario.valid){
      const funcionario: Funcionario = this.formFuncionario.value;
      this.funcionarioService.create(funcionario).subscribe(response =>{
        alert("Funcionario cadastrado com sucesso!");
        this.router.navigate(["/funcionarios"]);
      })
    }else{
      alert("Dados inválidos")
    }
  }


}

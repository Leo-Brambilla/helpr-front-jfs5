import { CargoService } from './../../../services/cargo.service';
import { Cargo } from './../../../models/cargo';
import { FuncionarioService } from './../../../services/funcionario.service';
import { Funcionario } from './../../../models/funcionario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit {

cargos: Cargo[] = []

  public funcionario: Funcionario = {

    nome: '',
    email: '',
    cpf: '',
    senha: '',

    cargo: {
      idCargo: NaN,
      nome:'',
      descricao: '',
      salario: NaN
    },

  };

  constructor(
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private cargoService: CargoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeFields();
    this.initializeCargos();
  }

  private initializeFields(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id){
      this.funcionarioService.findById(id).subscribe(funcionario => {
        this.funcionario = funcionario;
      })

    }
  }
  private initializeCargos(): void{
    this.cargoService.findAll().subscribe(cargos =>{
      this.cargos = cargos
    })
  }
  public update(): void{
    this.funcionarioService.update(this.funcionario).subscribe(() =>{
      alert("Funcionario editado com sucesso!")
      this.router.navigate(["/funcionarios"]);
    })
  }
}

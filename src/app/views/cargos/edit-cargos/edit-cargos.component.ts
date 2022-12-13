
import { CargoService } from 'src/app/services/cargo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from './../../../models/cargo';
import { Component, OnInit, Pipe } from '@angular/core';


@Component({
  selector: 'app-edit-cargos',
  templateUrl: './edit-cargos.component.html',
  styleUrls: ['./edit-cargos.component.css']
})
export class EditCargosComponent implements OnInit {


  public cargo: Cargo = {
    nome: "",
    descricao:"",
    salario: NaN
  }

  constructor(
    private route: ActivatedRoute,
    private cargoService: CargoService,
    private router: Router,

    ) { }

  ngOnInit(): void {
    this.initializeFields();

  }

  private initializeFields(): void{
    const idCargo: string | null = this.route.snapshot.paramMap.get('id');
    if(idCargo){
      this.cargoService.findById(idCargo).subscribe(cargo => {
        this.cargo = cargo;
      })
    }
  }


  public update(): void{
    this.cargoService.update(this.cargo).subscribe(() =>{
      alert("Cargo editado com sucesso!")
      this.router.navigate(["/cargos"]);
    })
  }

}

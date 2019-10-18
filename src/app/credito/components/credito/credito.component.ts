import { Component, OnInit } from '@angular/core';
import { CreditoService } from '../../services';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  constructor(private credito: CreditoService) { }
  private varCredito: number;
  ngOnInit() {
    this.varCredito = 0;
  }
  newcredito(varRecebe){
    this.varCredito = this.credito.CreditoSomar(this.varCredito, varRecebe)
  }

  atualizaCredito(){
    this.varCredito = this.varCredito - 1;
  }

  get visorCredito(){
    return this.varCredito;
  }

}

import { ProdutosService } from './../produtos.service';
import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styles: []
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  public produtos: Produto[];

  ngOnInit(): void {
    this.produtoService.obterProdutos()
    .subscribe(
      produtos => {
        this.produtos = produtos;
      },
      error => console.log(error)
    )
  }

}

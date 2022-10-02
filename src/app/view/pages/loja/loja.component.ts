import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ClienteService } from 'src/app/service/cliente.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  imagePath   = "assets/otherworld-screenshot.jpg";
  nomeCliente!: string | null;
  enderecoCliente!: string | null;

  produtos: Produto[] = [];
  nomeProduto!: String;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('idCliente') === null){
      this.router.navigate(['/login']);
    }else{
      if(sessionStorage.getItem('nomeCliente') != null){
        this.nomeCliente = sessionStorage.getItem('nomeCliente');
      }
      if(sessionStorage.getItem('enderecoCliente') != null){
        this.enderecoCliente = sessionStorage.getItem('enderecoCliente');
      }

      this.clienteService.getAllProdutos().subscribe(data => {this.produtos = data});
    }
  }

  seachProduto(){
    this.clienteService.searchProduto(this.nomeProduto).subscribe(data => {this.produtos = data;});
  }

  lojaItem(idProduto: number){
    sessionStorage.setItem('idProduto', idProduto.toString());
    this.router.navigate(['/loja-item']);
  }

}

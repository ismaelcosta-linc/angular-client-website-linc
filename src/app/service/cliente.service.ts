import { Injectable } from "@angular/core";
import { Cliente } from "../model/Cliente";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from "../model/Produto";
import { Venda } from "../model/Venda";
import { Servico } from "../model/Servico";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private loginClienteUrl: string;
  private cadastrarClienteUrl: string;
  private lojaUrl: string;
  private confirmarCompraUrl: string;
  private confirmarServicoUrl: string;

  constructor(private http: HttpClient) {

    this.loginClienteUrl     = 'https://api-website-linc.herokuapp.com/login-cliente';
    this.cadastrarClienteUrl = "https://api-website-linc.herokuapp.com/cadastrar-cliente";
    this.lojaUrl             = "https://api-website-linc.herokuapp.com/loja";
    this.confirmarCompraUrl  = "https://api-website-linc.herokuapp.com/confirmar-compra";
    this.confirmarServicoUrl = "https://api-website-linc.herokuapp.com/confirmar-servico";
  }

  
  public findAllCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.loginClienteUrl);
  }

  public login(cliente: Cliente) {
    return this.http.post<Cliente>(this.loginClienteUrl, cliente);
  }

  public cadastrarCliente(cliente: Cliente) {
    return this.http.post<Cliente>(this.cadastrarClienteUrl, cliente);
  }

  public getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.lojaUrl);
  }

  public searchProduto(nomeProduto: String): Observable<Produto[]> {
    return this.http.post<Produto[]>(this.lojaUrl, nomeProduto);
  }

  public confirmarCompra(venda: Venda) {
    return this.http.post<Cliente>(this.confirmarCompraUrl, venda);
  }

  public confirmarServico(servico: Servico) {
    return this.http.post<Servico>(this.confirmarServicoUrl, servico);
  }
}
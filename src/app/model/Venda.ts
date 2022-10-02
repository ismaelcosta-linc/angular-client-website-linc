export class Venda{

    idVenda!: number;
    idEstrangeiroCliente!: number;
    idEstrangeiroProduto!: number;
    nomeEstrangeiroCliente!: String | null; //loja-item requer o | null;
    nomeEstrangeiroProduto!: String;
    observacaoVenda!: string;
    quantItemVenda!: number;   
    customizacaoVenda!: string;

}
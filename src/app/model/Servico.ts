export class Servico{

    idServico!: number;
    idEstrangeiroCliente!: number;
    idEstrangeiroAdministrador!: number;
    nomeEstrangeiroCliente!: String | null //Servico requer que seja | null;
    nomeEstrangeiroAdministrador!: String;
    tituloServico!: string;
    dataAberturaServico!: string;
    descricaoServico!: string;
    statusServico!: string;
    precoServico!: number;
    disposicaoRemotoServico!: string;
    tipoDispositivoServico!: string;
    disposicaoLayoutGenerico!: string;
    tipoPlataformaSistema!: string;
}
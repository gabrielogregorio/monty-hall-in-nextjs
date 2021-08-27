import PortaModel from "../model/porta";

export function criarPortas(qtde: number, comPresente: number): PortaModel[] {
  // Função que vai mapear por qtde vezes e retornar instancias de porta
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1
    const temPresente = numero === comPresente
    return new PortaModel(numero, temPresente)
  })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
  return portas.map(porta => {
    const portaIgual = porta.numero == portaModificada.numero

    if (portaIgual) {
      return portaModificada
    } else {
      // Se já abriu a porta modificada, não desselecione as demais portas
      return portaModificada.aberta ? porta : porta.desselecionar()
    }
  })
}
import Porta from '../../components/Porta/Porta'
import { useState } from 'react'
import { criarPortas, atualizarPortas } from '../../functions/portas'
import styles from './Jogo.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function jogo() {
  const router = useRouter()
  const [portas, setPortas] = useState([])
  const [valido, setValido] = useState(false)
  
  useEffect(() => {
    let [qtdePortas, portaComPresente] = router.query?.index
    qtdePortas = parseInt(qtdePortas)
    portaComPresente = parseInt(portaComPresente)

    // Quantidade de portas
    let qtdePortasValidas = qtdePortas >= 3 && qtdePortas <= 40

    // Porta com presente é válida
    let qtdePresenteValidas = portaComPresente >= 1 && portaComPresente <= qtdePortas

    setValido(qtdePortasValidas && qtdePresenteValidas)

  }, [portas]) // quando isso modificar

  useEffect(() => {
    if(router.query.index !== undefined) {
      let [qtdePortas, portaComPresente] = router.query?.index
      qtdePortas = parseInt(qtdePortas)
      portaComPresente = parseInt(portaComPresente)
      setPortas(criarPortas(qtdePortas, portaComPresente))
    }
  }, [router?.query]) // quando isso modificar


  function renderPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} atualizarPorta={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    })
  }


  return ( 
    <div className={styles.game}>
      <div className={styles.doors}>
        {valido ?
          renderPortas() : 
          <h2>Valores inválido</h2>}
      </div>

      <div className={styles.buttons}>
        <Link href="/">
          <button>Reiniciar</button>
        </Link>
      </div>
      
    </div>
  )

}
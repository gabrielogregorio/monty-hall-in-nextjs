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
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {renderPortas()}
      </div>

      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar</button>
        </Link>
      </div>
      
    </div>
  )

}
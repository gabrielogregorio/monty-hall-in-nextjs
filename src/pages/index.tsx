import Card from '../components/Form/Card'
import styles from './Form.module.css'
import Link from 'next/link'
import Input from '../components/Form/Input'
import { useState } from 'react'

export default function Formulary() {
  const [ qtdePortas, setQtdePortas ] = useState(3)
  const [ comPresente, setComPresente ] = useState(1)
  

  return ( 
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
         </Card>
        <Card>
          <Input text="Qtde Portas" value={qtdePortas} onChange={novaQtde => {setQtdePortas(novaQtde)}}  />
        </Card>
      </div>

      <div>
        <Card>
          <Input text="Com presente" value={comPresente} onChange={novaComPresente => {setComPresente(novaComPresente)}}  />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}

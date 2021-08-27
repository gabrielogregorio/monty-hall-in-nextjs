import Card from '../../components/Form/Card'
import styles from './Form.module.css'
import Link from 'next/link'

export default function Formulary() {
  return ( 
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
         </Card>
        <Card/>
      </div>

      <div>
        <Card />
        <Card bgcolor="#28a085">
          <Link href={`/jogo/5/1`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}

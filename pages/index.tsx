import { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/Form.module.css'
import Card from '../components/Card'
import NumberInput from '../components/NumberInput'

export default function Home() {
  const [qtdDoors, setQtdDoors] = useState(3)
  const [gotGift, setGotGift] = useState(3)

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#4169e1">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Quantidade de Portas" value={qtdDoors} onChange={newQtd => setQtdDoors(newQtd)} />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput text="Porta Premiada" value={gotGift} onChange={newDoorWithGift => setGotGift(newDoorWithGift)} />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${qtdDoors}/${gotGift}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}

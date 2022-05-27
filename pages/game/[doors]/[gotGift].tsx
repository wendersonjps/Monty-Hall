import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../../../styles/Game.module.css'
import Door from '../../../components/Door'
import { createDoors, updateDoors } from '../../../functions/doors'

export default function Game() {
    const router = useRouter()

    const [valid, setValid] = useState(false)
    const [doors, setDoors] = useState([])

    useEffect(() => {
        const doors = +router.query.doors
        const gotGift = +router.query.gotGift

        const validDoorsQtd = doors >= 3 && doors <= 100
        const validGotGift = gotGift >= 1 && gotGift <= doors

        setValid(validDoorsQtd && validGotGift)
    }, [doors])

    useEffect(() => {
        const doors = +router.query.doors
        const gotGift = +router.query.gotGift

        setDoors(createDoors(doors, gotGift))
    }, [router?.query])

    function renderDoors() {
        return doors.map(door => {
            return <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
        })
    }
    return (
        <div className={styles.game}>
            <div className={styles.doors}>
                {valid ? renderDoors() : <h1>Nenhuma porta foi premiada 😥</h1>}
            </div>
            <div className={styles.buttons}>
                <Link href='/'>
                    <button>Reiniciar</button>
                </Link>
            </div>
        </div>
    )
}
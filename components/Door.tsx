import styles from '../styles/Door.module.css'
import Gift from '../components/Gift'
import DoorModel from '../model/door'

interface DoorProps {
    value: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected && !door.opened ? styles.selected : ''
    const toggleSelection = e => props.onChange(door.toggleSelection())
    const openUp = e => {
        e.stopPropagation()
        props.onChange(door.openUp())
    }

    function renderDoor() {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.handle} onClick={openUp}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={toggleSelection}>
            <div className={`${styles.frame} ${selected}`}>
                {door.closed ? renderDoor() : door.gotGift ? <Gift /> : false}
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}
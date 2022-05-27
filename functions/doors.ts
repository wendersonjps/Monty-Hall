import DoorModel from '../model/door'

export function createDoors(qtd: number, doorWithGift: number): DoorModel[] {
    return Array.from({ length: qtd }, (_, i) => {
        const number = i + 1
        const gotGift = number === doorWithGift

        return new DoorModel(number, gotGift)
    })
}

export function updateDoors(doors: DoorModel[], changedDoor: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const sameAsChanged = currentDoor.number === changedDoor.number

        if (sameAsChanged) {
            return changedDoor
        } else {
            return changedDoor.opened ? currentDoor : currentDoor.deselect()
        }
    })
}
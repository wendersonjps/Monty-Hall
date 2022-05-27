export default class DoorModel {
    #number: number
    #gotGift: boolean
    #selected: boolean
    #opened: boolean

    constructor(number: number, gotGift = false, selected = false, opened = false) {
        this.#number = number
        this.#gotGift = gotGift
        this.#selected = selected
        this.#opened = opened
    }

    get number() {
        return this.#number
    }

    get gotGift() {
        return this.#gotGift
    }

    get selected() {
        return this.#selected
    }

    get opened() {
        return this.#opened
    }

    get closed() {
        return !this.opened
    }

    deselect() {
        const selected = false
        return new DoorModel(this.number, this.gotGift, selected, this.opened)
    }

    toggleSelection() {
        const selected = !this.#selected
        return new DoorModel(this.number, this.gotGift, selected, this.opened)

    }

    openUp() {
        const opened = true
        return new DoorModel(this.number, this.gotGift, this.#selected, opened)
    }
}
class Client {
    #name: string
    #id: string
    #age: number

    constructor(name: string, age: number, id: string = null) {
        this.#name = name
        this.#age = age,
        this.#id = id
    }

    static void () {
        return new Client('', 0)
    }

    get id () {
        return this.#id
    }

    get age () {
        return this.#age
    }

    get name () {
        return this.#name
    }

}

export default Client
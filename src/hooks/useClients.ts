import { useEffect, useState } from "react"
import ClientRepository from "../backend/db/ClientRepository"
import Client from "../core/Client"
import IClientRepository from "../core/IClientRepository"
import useTable from "./useTable"

function useClients () {
    const repo: IClientRepository = new ClientRepository()

    const [client, setClient] = useState<Client>(Client.void())
    const [clients, setClients] = useState<Client[]>([])
    const { showForm, showTable, tableVisible, formVisible } = useTable()

    useEffect(getAll, [])

    function getAll()
    {
        repo.getAll().then(clients => {
            setClients(clients)
            showTable()
        })
    }

    function newClient()
    {
        setClient(Client.void())
        showForm()
    }

    async function saveClient (client: Client) {
        await repo.create(client)
        getAll()
    }

    function selectedClient (client: Client) {
        setClient(client)
        showForm()
    }

    async function deleteClient (id: string) {
        await repo.delete(id)
        getAll()
    }

    return {
        client,
        clients,
        tableVisible,
        formVisible,
        showTable,
        newClient,
        saveClient,
        deleteClient,
        selectedClient,
        getAll
    }
}

export default useClients
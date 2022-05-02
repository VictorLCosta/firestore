import Client from "./Client";

interface IClientRepository {
    create(client: Client): Promise<Client>
    delete(id: string): Promise<void>
    getAll(): Promise<Client[]>
}

export default IClientRepository
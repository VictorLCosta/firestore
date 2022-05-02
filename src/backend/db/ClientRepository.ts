import database from '../config';
import firestore, {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
} from 'firebase/firestore'
import Client from '../../core/Client';
import IClientRepository from './../../core/IClientRepository';

class ClassRepository implements IClientRepository {

    #conversor = {
        toFirestore(client: Client) {
            return {
                name: client.name,
                age: client.age
            }
        },
        fromFirestore(snapshot: firestore.QueryDocumentSnapshot, options: firestore.SnapshotOptions,) {
            const dados = snapshot.data(options)
            return new Client(dados.name, dados.age, snapshot.id)
        }
    }

    #colecaoCliente = collection(database, 'clientes').withConverter(this.#conversor)

    async create(client: Client): Promise<Client> {
        if (client?.id) {
            await setDoc(
                doc(database, 'clientes', client.id).withConverter(this.#conversor),
                client,
            )
            return client
        } else {
            const docRef = await addDoc(
                this.#colecaoCliente,
                client
            )
            const doc = await getDoc(docRef)
            return doc.data()
        }
    }

    async delete(id: string): Promise<void> {
        return await deleteDoc(doc(database, 'clientes', id))
    }

    async getAll(): Promise<Client[]> {
        const clientesCol = this.#colecaoCliente
        const clientesSnapshot = await getDocs(clientesCol)
        const clientesList = clientesSnapshot.docs.map((doc) => doc.data()) ?? []
        return clientesList
    }

}

export default ClassRepository
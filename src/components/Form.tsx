import { useState } from 'react';
import Client from '../core/Client';
import Button from './Button';
import Input from './Input';

interface FormProps {
    client: Client
    clientChanged?: (client: Client) => void
    cancelled?: () => void
}

const Form = (props: FormProps) => {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ? (<Input type='text' text='Código' value={id} />) : false}
            <Input type='text' text='Nome' value={name} valueChanged={setName} />
            <Input type='number' text='Idade' value={age} valueChanged={setAge} />
            <div className='flex justify-end mt-6'>
                <Button color='blue' className='mr-2' onClick={() => props.clientChanged?.(new Client(name, age, id))} >{id ? 'Alterar' : 'Salvar'}</Button>
                <Button color='gray' onClick={props.cancelled}>Cancelar</Button>
            </div>
        </div>
    )
}

export default Form
import Client from './../core/Client';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'

interface TableProps {
    clients?: Client[]
    onEdit?: (val: any) => void
    onDelete?: (id: any) => void
}

const Table = (props: TableProps) => {
    var data = props.clients?.map(function (val, i) {
        return (
            <tr key={i} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                <td className='px-5 py-4'>{val.id}</td>
                <td className='px-5 py-4'>{val.name}</td>
                <td className='px-5 py-4'>{val.age}</td>
                <td className='px-5 py-4'>
                    <div className="flex justify-center items-center">
                        <button 
                            onClick={() => props.onEdit(val)}
                            className='flex justify-center items-center text-green-700 hover:bg-purple-50 rounded-full p-2 mr-1'>
                            <PencilAltIcon className='h-5' />
                        </button>
                        <button
                            onClick={() => props.onDelete(val.id)} 
                            className='flex justify-center items-center text-red-700 hover:bg-purple-50 rounded-full p-2'>
                            <TrashIcon className="h-5" />
                        </button>
                    </div>
                </td>
            </tr>
        )
    })

    return (    
        <table className='w-full bg-violet-200 rounded-lg overflow-hidden'>
            <thead className='bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white h-11 text-left'>
                <tr>
                    <th className='px-5'>Código</th>
                    <th className='px-5'>Nome</th>
                    <th className='px-5'>Idade</th>
                    <th className='px-5 text-center'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {data}
            </tbody>
        </table>
    )
}

export default Table
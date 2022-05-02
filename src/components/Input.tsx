interface InputProps {
    type?: 'text' | 'number'
    text: string
    value: any
    readOnly?: boolean
    valueChanged?: (val: any) => void
}

const Input = (props: InputProps) => {
    return (
        <div className="mb-4">
            <label className="block mb-3">
                {props.text}
            </label>
            <input 
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.readOnly}
                onChange={e => props.valueChanged(e.target.value)}
                className={`border border-purple-500 rounded-lg w-full py-2 px-4 text-gray-700 bg-gray-100 leading-tight ${props.readOnly ? '' : 'focus:bg-white'}`} 
            />
        </div>
    )
}

export default Input
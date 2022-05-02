interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className? : string
    children: any,
    onClick?: () => void
}

const Button = (props: ButtonProps) => {
    const color = props.color ?? 'gray'
    return (
        <button onClick={props.onClick} className={`bg-gradient-to-r from-${color}-400 to-${color}-700 text-white font-semibold rounded-md px-4 py-2 ${props.className}`}>
            {props.children}
        </button>
    )
}

export default Button
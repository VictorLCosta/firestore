import Title from "./Title"

interface LayoutProps {
    title: string,
    children: any
}

const Layout = (props: LayoutProps) => {
    return (
        <div className="flex flex-col w-2/3 bg-white text-gray-800 rounded-md overflow-x-hidden px-5 py-2">
            <Title>{props.title}</Title>
            <div className="py-6">
                {props.children}
            </div>
        </div>
    )
}

export default Layout
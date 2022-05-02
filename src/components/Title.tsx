const Title = (props) => {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-3xl mt-2 mb-4 font-semibold">{props.children}</h1>
            <hr />
        </div>
    )
}

export default Title
export function BasicLayout(props) {
    const { children } = props;

    return (
        <>
            <div>
                Menu
            </div>
            <div className="container mx-auto">
                { children }
            </div>
        </>
    )
}
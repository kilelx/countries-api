import DarkMode from "./DarkMode";

const Navigation = () => {
    return (
        <header className="bg">
            <nav className="container flex between al-center">
                <h1>Where in the world?</h1>
                <DarkMode />
            </nav>
        </header>
    )
}

export default Navigation;
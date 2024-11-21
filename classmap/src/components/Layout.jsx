import { Outlet, Link } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Hjem</Link>
                    </li>
                    <li>
                        <Link to="/students">Alle elever</Link>
                    </li>
                    <li>
                        <Link to="/students/create">Oppret ny elev</Link>
                    </li>
                    <li>
                        <Link to="/klasser">Alle klasser</Link>
                    </li>
                    <li>
                        <Link to="/klasser/create">Opret ny klasse</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
import logoHeader from './escudo.png'
import './Header.css'

export default function Header(){
    return(
            <header>
                <a href="#" className="logo">
                    <img id="escudo" alt="Logo" src={logoHeader}/>
                    <h2>River Plate</h2>
                </a>
            <nav>
                <a href="#">Cerrar sesión</a>
            </nav>
            </header>
    )
}

import './style.css'
import netflix_full_logo from "../../assets/netflix_full_logo.png"

export function Header() {
    return (
        <header className="main-header">
        <div className="container">
            <img src={netflix_full_logo} alt="" />
            <nav className="navbar">
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Séries</a></li>
                    <li><a href="#">Bombando</a></li>
                    <li><a href="#">Minha Lista</a></li>
                </ul>
                <div className="actions">
                    <div className="search-field">
                        <label for="main-search">
                            <i className='bx bx-search'></i>
                        </label>
                        <input type="text" id="main-search" placeholder="Títulos, pessoas e gêneros" />
                    </div>
                    <i className='bx bx-bell'></i>
                    <div className="account">
                        <img src="./assets/avatars/steve.jpeg" alt="Nome do usuário" />
                        <i className='bx bxs-down-arrow'></i>
                        <div className="account-modal">
                            <ul>
                                <li>
                                    <img src="./assets/avatars/wandinha.jpg" alt="Nome do usuário" />
                                    <span>Edson Dantas</span>
                                </li>
                                <li>
                                    <img src="./assets/avatars/steve.jpeg" alt="Nome do usuário" />
                                    <span>Pedro</span>
                                </li>
                                <li>
                                    <img src="./assets/avatars/wandinha.jpg" alt="Nome do usuário" />
                                    <span>Lucas</span>
                                </li>
                                <li>
                                    <img src="./assets/avatars/steve.jpeg" alt="Nome do usuário" />
                                    <span>João</span>
                                </li>
                                <li>
                                    <i className='bx bx-edit-alt'></i>
                                    <span>Gerenciar Perfil</span>
                                </li>
                                <li>
                                    <i className='bx bx-transfer'></i>
                                    <span>Transferir Perfil</span>
                                </li>
                                <li>
                                    <i className='bx bx-user'></i>
                                    <span>Conta</span>
                                </li>
                                <li>
                                    <i className='bx bx-help-circle'></i>
                                    <span>Central de Ajuda</span>
                                </li>
                                <li>
                                    <span>Sair da Netflix</span>
                                </li>
                            </ul>
                            <i className='bx bxs-up-arrow'></i>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    )
}
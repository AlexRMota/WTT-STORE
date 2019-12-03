import React from "react";
import './Header.css';

function Header() {
    return (
        <div>
            <div className="line"></div>
            <div className="header">
                <div className="logo">
                    <a href="index.html"><img src={require('../../assets/images/logo.png')} /></a>
                </div>
                <div className="header-top">
                    <div className="header-grid">
                        <ul className="header-in">
                            <li><a href="account.html">Minha Conta   </a> </li>
                        </ul>
                        <div className="search-box">
                            <div id="sb-search" className="sb-search">
                                <form>
                                    <input className="sb-search-input" placeholder="Entre com sua busca..." type="search" name="search" id="search" />
                                    <input className="sb-search-submit" type="submit" value="" />
                                    <span className="sb-icon-search"> </span>
                                </form>
                            </div>
                        </div>
                        <script src="js/uisearch.js"></script>
                        <script>
                            new UISearch(document.getElementById('sb-search'));
                        </script>
                        <div className="online">
                            <a href="#null">Minhas Compras</a>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="header-bottom">
                        <div className="h_menu4">
                            <a className="toggleMenu" href="#">Menu</a>
                            <ul className="nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">A Livros MOTA</a></li>
                                <li><a href="#">Comprar Livros</a></li>
                                <li><a href="#">Promoções</a></li>
                                <li><a href="#">Mais <i> </i></a>
                                    <ul>
                                        <li><a href="#">Contato</a></li>
                                        <li><a href="#">Política de Privacidade</a></li>
                                        <li><a href="#">Trabalhe na Mota</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <ul className="header-bottom-in">
                            <li>
                                <select className="drop">
                                    <option value="Real" className="in-of">Comunidades</option>
                                    <option value="Dollars" className="in-of">Além dos Livros</option>
                                    <option value="Euro" className="in-of">Ler mais</option>
                                </select>
                            </li>
                        </ul>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
    );
}

export default Header;
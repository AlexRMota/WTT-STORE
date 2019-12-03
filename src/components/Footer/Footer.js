import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
                <div className="col-md-3 footer-left">
                    <h4>Livros</h4>
                    <div className="run-top">
                        <ul className="run-grid">
                            <li><a href="product.html">CULINÁRIA</a></li>
                            <li><a href="product.html">RELIGIÃO</a></li>
                            <li><a href="product.html">MEDICINA</a></li>
                            <li><a href="product.html">INFORMÁTICA</a></li>
                            <li><a href="product.html">CINEMA</a></li>
                            <li><a href="product.html">ESPORTES</a></li>
                        </ul>
                        <ul className="run-grid">
                            <li><a href="product.html">ARTES</a></li>
                            <li><a href="product.html">VIAGENS</a></li>
                            <li><a href="product.html">ROCK</a></li>
                        </ul>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="col-md-3 footer-left left-footer">
                    <h4>ÚLTIMAS</h4>
                    <div className="run-top top-run">
                        <ul className="run-grid">
                            <li><a href="#">Novidades</a></li>
                            <li><a href="#">Comunidades</a></li>
                            <li><a href="#">Vídeos</a></li>
                            <li><a href="#">Clube</a></li>
                            <li><a href="#">Literatura</a></li>
                            <li><a href="#">Mais Livros</a></li>
                        </ul>
                        <ul className="run-grid">
                            <li><a href="#">Bibliotecas</a></li>
                            <li><a href="#">Eventos</a></li>
                            <li><a href="#">Concursos</a></li>
                        </ul>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="col-md-2 footer-left left-footer">
                    <h4>SUA CONTA</h4>
                    <ul className="run-grid-in">
                        <li><a href="account.html">Login</a></li>
                        <li><a href="#">Meus Livros</a></li>
                        <li><a href="#">Favoritos</a></li>
                    </ul>
                </div>
                <div className="col-md-4 footer-left left-footer">
                    <ul className="social-in">
                        <li><a href="#"><i> </i></a></li>
                        <li><a href="#"><i className="youtube"> </i></a></li>
                        <li><a href="#"><i className="facebook"> </i></a></li>
                        <li><a href="#"><i className="twitter"> </i></a></li>
                    </ul>
                    <div className="letter">
                        <h5>NEWSLETTER</h5>
                        <span>Cadastre-se para o próximo artigo</span>
                        <h6>LIVROS ON-LINE. SERÁ O FIM DO LIVRO TRADICIONAL?</h6>
                        <p>Saiba o que os especialistas falam sobre o assunto.</p>
                        <a href="register.html" className="sign">CADASTRE-SE AGORA MESMO</a>
                        <p className="footer-class"> 2019 Teste para WTT | Powered by Alex Mota </p>
                    </div>

                </div>
                <div className="clearfix"> </div>
            </div>
    );
}

export default Footer;
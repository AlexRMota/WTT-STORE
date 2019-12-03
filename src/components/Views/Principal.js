import React from "react";
import {Link} from "react-router-dom";

function Principal() {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="banner-matter">
                        <h1>Promoção Especial de Livros Infantis</h1>
                        <div className="out">
                            <Link to="/Produtos" className="find">Veja os Títulos</Link>
                            <Link to="/Produtos" className="shop">Comprar</Link>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="sport-your">

                    <div className="line1"></div>

                    <div id="example1">
                        <div id="owl-demo" className="owl-carousel text-center">
                            <div className="item">
                                <a href="single.html" title="image" rel="title1">
                                    <img className="img-responsive" src={require('../../assets/images/pic.jpg')} />
                                    <div className="run">
                                        <h1>R$ 45,00</h1>
                                        <p>Ficção</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="single.html" title="image" rel="title1">
                                    <img className="img-responsive" src={require('../../assets/images/pic1.jpg')} />
                                    <div className="run">
                                        <h1>R$ 145,00</h1>
                                        <p>Informática</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="single.html" title="image" rel="title1">
                                    <img className="img-responsive" src={require('../../assets/images/pic2.jpg')} />
                                    <div className="run">
                                        <h1>R$ 85,00</h1>
                                        <p>Econômia</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="single.html" title="image" rel="title1">
                                    <img className="img-responsive" src={require('../../assets/images/pic3.jpg')} />
                                    <div className="run">
                                        <h1>R$ 73,00</h1>
                                        <p>Medicina</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="single.html" title="image" rel="title1">
                                    <img className="img-responsive" src={require('../../assets/images/pic4.jpg')} />
                                    <div className="run">
                                        <h1>R$ 35,00</h1>
                                        <p>Infantil</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="single.html" title="image" rel="title1">
                                    <img className="img-responsive" src={require('../../assets/images/pic.jpg')} />
                                    <div className="run">
                                        <h1>R$ 63,00</h1>
                                        <p>Psicologia</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="single.html" title="image" rel="title1">
                                    <img className="img-responsive" src={require('../../assets/images/pic1.jpg')} />
                                    <div className="run">
                                        <h1>R$ 50,00</h1>
                                        <p>Religião</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="single.html" title="image" rel="title1">
                                    <img className="img-responsive" src={require('../../assets/images/pic2.jpg')} />
                                    <div className="run">
                                        <h1>R$ 45,00</h1>
                                        <p>Matemática</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="single.html" title="image" rel="title1">
                                    <img className="img-responsive" src={require('../../assets/images/pic3.jpg')} />
                                    <div className="run">
                                        <h1>R$ 45,00</h1>
                                        <p>Ficção</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="single.html" title="image" rel="title1">
                                    <img className="img-responsive" src={require('../../assets/images/pic4.jpg')} />
                                    <div className="run">
                                        <h1>R$ 45,00</h1>
                                        <p>Ficção</p>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="single.html" title="image" rel="title1">
                                    <img className="img-responsive" src={require('../../assets/images/pic.jpg')} />
                                    <div className="run">
                                        <h1>R$ 45,00</h1>
                                        <p>Ficção</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h6 className="your-in">Promoções</h6>
                    <div className="line2">

                    </div>
                </div>
                <div className="content-grids">

                    <div className="col-md-4 content-grid">
                        <Link to="/Livros" className="lot"><img className="img-responsive" src={require('../../assets/images/sh.png')} /></Link>
                        <div className="shoe">
                            <p>Neuro pílulas</p>
                            <label>R$67,99</label>
                            <Link to="/Livros">Mais info</Link>
                        </div>
                        <div className="clearfix"> </div>
                        <b className="plus-in">+</b>
                    </div>
                    <div className="col-md-4 content-grid">
                        <Link to="/Livros" className="lot"><img className="img-responsive" src={require('../../assets/images/sh1.png')} /></Link>
                        <div className="shoe">
                            <p>Por que a Bíblia é assim</p>
                            <label>R$87,99</label>
                            <Link to="/Livros">Mais info</Link>
                        </div>
                        <div className="clearfix"> </div>
                        <b className="plus-in">+</b>
                    </div>
                    <div className="col-md-4 content-grid">
                        <Link to="/Livros" className="lot"><img className="img-responsive" src={require('../../assets/images/sh2.png')} /></Link>
                        <div className="shoe">
                            <p>Como vender pelo preço que você quer vender</p>
                            <label>R$77,99</label>
                            <Link to="/Livros">Mais info</Link>
                        </div>

                        <div className="clearfix"> </div>
                        <b className="plus-in">+</b>
                    </div>
                    <div className="clearfix"></div>

                    <Link to="/Produtos" className="botao1">Ver mais livros</Link>

                </div>
                <div className="content-top">
                    <div className="col-md-4 top-content">
                        <a href="single.html"><img className="img-responsive" src={require('../../assets/images/pi.jpg')} /></a>
                    </div>
                    <div className="col-md-4 top-content">
                        <a href="single.html"><img className="img-responsive" src={require('../../assets/images/pi1.jpg')} /></a>
                    </div>
                    <div className="col-md-4 top-content">
                        <a href="single.html"><img className="img-responsive" src={require('../../assets/images/pi2.jpg')} /></a>
                    </div>

                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
}

export default Principal;


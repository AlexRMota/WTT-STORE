import React from "react";

function Livros() {
    return (        
        <div className="container">
            <div className="single">
                <div className="col-md-9 top-in-single">
                    <div className="col-md-7 single-top fundoBranco">
                        <img className="img-responsive img-size" src={require('../../assets/images/pr.png')} />                        
                        {/* <ul id="etalage">
                            <li>
                                <a href="optionallink.html">
                                    <img className="etalage_thumb_image img-responsive" src={require('../../assets/images/si1.jpg')} />
                                    <img className="etalage_source_image img-responsive" src={require('../../assets/images/s2.jpg')} />
                                </a>
                            </li>
                            <li>
                                <img className="etalage_thumb_image img-responsive" src={require('../../assets/images/si2.jpg')} />
                                <img className="etalage_source_image img-responsive" src={require('../../assets/images/s3.jpg')} />
                            </li>
                            <li>
                                <img className="etalage_thumb_image img-responsive" src={require('../../assets/images/si.jpg')} />
                                <img className="etalage_source_image img-responsive" src={require('../../assets/images/s1.jpg')} />
                            </li>
                            <li>
                                <img className="etalage_thumb_image img-responsive" src={require('../../assets/images/si2.jpg')} />
                                <img className="etalage_source_image img-responsive" src={require('../../assets/images/s3.jpg')} />
                            </li>
                        </ul>*/}

                    </div> 
                    <div className="col-md-5 single-top-in espacoEsq">
                        <div className="single-para">
                            <h4>Estive em Dublin e Lembrei de Você</h4>
                            <p>Livro de Helana Zuquini, que mostra como é viver em Dublin na Irlanda. Costumes, estilo de vida, custo de vida, roteiros, tudo o que você precisa sber se quiser vistar Dublin.</p>
                            <div className="star">
                                <ul>
                                    <li><i> </i></li>
                                    <li><i> </i></li>
                                    <li><i> </i></li>
                                    <li><i> </i></li>
                                    <li><i> </i></li>
                                </ul>
                                <div className="review">
                                    <a href="#"> 3 comentários </a>/
                                <a href="#">  Escrever comentário</a>
                                </div>
                                <div className="clearfix"> </div>
                            </div>

                            <label className="add-to">R$ 67,99</label>

                            <a href="#" className="cart ">Comprar</a>

                        </div>
                    </div>
                    <div className="clearfix"> </div>
                    <h4 className="compraram">Quem comprou esse livro pesquisaram estes</h4>
                    <div className="product-top">
                        <div className="col-md-4 grid-product-in">
                            <div className=" product-grid">
                                <a href="single.html"><img className="img-responsive" src={require('../../assets/images/sh2.png')} /></a>
                                <div className="shoe-in">
                                    <h6><a href="single.html">Lorem Ipsum is simply</a></h6>
                                    <label>$67.99</label>
                                    <a href="single.html" className="store">FIND A STORE</a>
                                </div>

                                <b className="plus-on">+</b>
                            </div>
                        </div>
                        <div className="col-md-4 grid-product-in">
                            <div className=" product-grid">
                                <a href="single.html"><img className="img-responsive" src={require('../../assets/images/pr1.png')} /></a>
                                <div className="shoe-in">
                                    <h6><a href="single.html">Lorem Ipsum is simply</a></h6>
                                    <label>$67.99</label>
                                    <a href="single.html" className="store">FIND A STORE</a>
                                </div>

                                <b className="plus-on">+</b>
                            </div>
                        </div>
                        <div className="col-md-4 grid-product-in">
                            <div className=" product-grid">
                                <a href="single.html"><img className="img-responsive" src={require('../../assets/images/pr.png')} /></a>
                                <div className="shoe-in">
                                    <h6><a href="single.html">Lorem Ipsum is simply </a></h6>
                                    <label>$67.99</label>
                                    <a href="single.html" className="store">FIND A STORE</a>
                                </div>

                                <b className="plus-on">+</b>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="single-bottom">
                        <h4>Promoções</h4>
                        <div className="product-go">
                            <img className="img-responsive fashion" src={require('../../assets/images/sh.png')} />
                            <div className="grid-product">
                                <a href="#" className="elit">Consectetuer adipiscing elit</a>
                                <span className=" price-in"><small>$500.00</small> $400.00</span>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="product-go">
                            <img className="img-responsive fashion" src={require('../../assets/images/sh1.png')} />
                            <div className="grid-product">
                                <a href="#" className="elit">Consectetuer adipiscing elit</a>
                                <span className=" price-in"><small>$500.00</small> $400.00</span>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="product-go">
                            <img className="img-responsive fashion" src={require('../../assets/images/sh2.png')} />
                            <div className="grid-product">
                                <a href="#" className="elit">Consectetuer adipiscing elit</a>
                                <span className=" price-in"><small>$500.00</small> $400.00</span>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
    );
}

export default Livros;
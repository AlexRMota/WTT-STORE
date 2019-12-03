import React from "react";
import {Link} from "react-router-dom";

function Produtos() {
    return (
        <div className="product-grids">
            <div className="container">
                <div className="product-top">
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            {/*<Link to={{pathname:"/Livros", productdetailProps: {productdetail: "pr.png"}}}><img className="img-responsive" src={require('../../assets/images/pr.png')} /></Link>*/}
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">Estive em Dublin e lembrei de você </a></h6>
                                <label>R$ 67,99</label>
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr1.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">A Bíblia Sagrada </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr2.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">Cartas de amor a toda gente</a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr3.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">A Escolha da Jurisdição Mais Favorável </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="product-top">                    
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr4.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">Reseliência </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/sh.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">Neuro Pílulas </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/sh2.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">Como vender pelo preço que você quer</a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr1.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">A Bíblia Sagrada </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="product-top">                    
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">Estive em Dublin e lembrei de você </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr1.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">A Bíblia Sagrada </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr2.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">Cartas de amor a toda gente</a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr3.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">A Escolha da Jurisdição Mais Favorável </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>                    
                    <div className="clearfix"> </div>
                </div>



                <div className="product-top">                    
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr4.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">Reseliência </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/sh.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">Neuro Pílulas </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/sh2.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">Como vender pelo preço que você quer</a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr1.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">A Bíblia Sagrada </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                <div className="product-top">                    
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">Estive em Dublin e lembrei de você </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr1.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">A Bíblia Sagrada </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr2.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">Cartas de amor a toda gente</a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>
                    <div className="col-md-3 grid-product-in">
                        <div className=" product-grid">
                            <Link to="/Livros"><img className="img-responsive" src={require('../../assets/images/pr3.png')} /></Link>
                            <div className="shoe-in">
                                <h6><a href="single.html">A Escolha da Jurisdição Mais Favorável </a></h6>
                                <label>R$ 67,99</label>                                
                            </div>

                            <b className="plus-on">+</b>
                        </div>
                    </div>                    
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
}

export default Produtos;
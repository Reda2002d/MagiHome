import BestProduct from "../../Components/BestProduct/BestProduct";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import NavBar from "../../Components/NavBar/NavBar";
import Propos from "../../Components/PROPOS/Propos";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Home.css'



export default function Home() {

    
    return (
        <div className="home-page">
            <NavBar position={'absolute'} left={'55px'}/>
        <div>
            

            {/* Carousel Start */}
            <div className="container-fluid p-0 mb-5">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="images/studiomcgee_AZHomestead_130-1-scaled-1-90135.jpg" alt="Image" />
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Magi'Home //</h6>
                                            <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Le choix malin pour votre cuisine</h1>
                                            <a href="" className="btn btn-danger py-3 px-5 animated slideInDown">Plus<i className="fa fa-arrow-right ms-3"></i></a>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Carousel End */}

            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                                <img className="position-absolute img-fluid w-100 h-100" src="images/entrepot_c2bc6b61.jpg" style={{ objectFit: 'cover' }} alt="" />
                                <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{ background: 'rgba(0, 0, 0, .08)' }}>
                                    <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Ans</span></h1>
                                    <h4 className="text-white">Expérience</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h6 className="text-danger text-uppercase">// Notre Entreprise //</h6>
                            <h1 className="mb-4"><span className="text-secondary">Magi'Home</span> est le meilleur endroit pour équiper votre cuisine</h1>
                            <p className="mb-4">Depuis de nombreuses années,Magi&#39;home est associé au choix
                                malin : des articles
                                électroménagers utiles, à la qualité
                                irreprochable et aux prix doux.
                                C&#39;est cet esprit qui anime nos
                                équipes : mettre à la disposition de
                                nos clients des technologies
                                novatrices à des prix attractifs.</p>
                            <div className="row g-4 mb-3 pb-3">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                            <span className="fw-bold text-secondary">01</span>
                                        </div>
                                        <div className="ps-3">
                                            <h6>Professionnel & Expert</h6>
                                            <span>Apporter les meilleurs appareils</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                            <span className="fw-bold text-secondary">02</span>
                                        </div>
                                        <div className="ps-3">
                                            <h6>Qualité de distribution</h6>
                                            <span>Possibilité de distribuer les appareils facilement et en grande quantité</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                            <span className="fw-bold text-secondary">03</span>
                                        </div>
                                        <div className="ps-3">
                                            <h6>Qualité de nos produits</h6>
                                            <span>Nous avons des partenariats avec des usines reconnues pour la qualité de leurs usines</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           </div>
                    </div>
                </div>
            </div>
            {/* About End */}

            {/* Service Start */}
            <BestProduct/>

            
        </div>
        <Footer/>
        </div>
    )
}

import React, { useState } from 'react'

export default function BestProduct() {
  const [produits,setproduit]=useState([
    {
      id: 101,
      nom: "Pétrin 7L",
      description: "Le pétrin MH70 de 7 litres et 1000 W est un batteur électrique spacieux idéal pour préparer de la pâte maison. Avec plusieurs vitesses de pétrissage, il permet de préparer facilement différents types de pâte. Son bol en acier inoxydable de 7 litres est résistant et facile à nettoyer, en faisant un outil de cuisine pratique pour les amateurs de pâtisserie.",
      img:"Pétrin MH 70.png",
    },{
      id: 103,
      nom: "Robot multifonction",
      description: "Le robot multifonction MH620 750 W est un appareil multifonctionnel qui peut alimenter votre cuisine parfaite. Equipé d'un mixeur d'une capacité de 1,8 litres, il permet de préparer une large gamme de recettes, smoothies, soupes et sauces. D'une capacité de 1,2 L, il offre beaucoup d'espace pour préparer vos plats, et avec 3 lames et 5 fonctions différentes ...",
      img:"Robot MH620.png",
    },{
      id: 111,
      nom: "Friteuse à air 5L",
      description: "La friteuse à air MH-120FF est un appareil de cuisine innovant qui utilise la technologie de l'air chaud pour frire les aliments. Contrairement aux friteuses traditionnelles qui nécessitent une grande quantité d'huile, la friteuse à air MH-120FF ne nécessite qu'une petite quantité d'huile ou même aucune huile du tout, ce qui la rend plus saine pour la cuisine quotidienne...",
      img:"Friteuse à air MH-120FF 3.png",
    },{
      id: 106,
      nom: "Blender MH-47",
      description: "Profitez d'une puissance de 750 watts, de 2 vitesses réglables et d'une tasse en verre robuste de 1,5 litre. Grâce à son mixeur à café et épices polyvalent, ainsi qu'à ses quatre lames en inox, dégustez les meilleurs jus avec le mixeur magihome",
      img:"Blender MH-47.png",
    }
  ])
  const [filterData, setFilterData] = useState(produits[0]);

  const handleClick = (id) => {
    const data = produits.find((item) => item.id === id);
    setFilterData(data)
  };
  return (
    <div className="container-xxl service py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-danger text-uppercase">// Meilleurs produits //</h6>
                        <h1 className="mb-5">Découvrez nos meilleurs produits</h1>
                    </div>
                    <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-lg-4">
                            <div className="nav w-100 nav-pills me-4">
                              {produits.map(item=>(
                                <button onClick={()=>handleClick(item.id)} key={item.id} className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                    <h4 className="m-0" >{item.nom}</h4>
                                </button>
                              ))}
                                
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content w-100">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: '350px' }}>
                                            <div className="position-relative h-100 imgpro" >
                                                <img className="position-absolute img-fluid w-100 h-100" src={`images/ProductsImages/${filterData.img}`} style={{ objectFit: 'cover' }} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-4">{filterData.description}</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

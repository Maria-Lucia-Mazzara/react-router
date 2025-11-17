

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Prodotti() {

    const [prodotto, setProdotto] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(response => {
                console.log(response.data);
                setProdotto(response.data);
            })
    }, []);

    return (
        <>
            <div className="container py-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {prodotto.map((item) => (
                        <div className="col" key={item.id}>
                            <Link
                                to={`/products/${item.id}`}
                                className="text-decoration-none text-dark"
                            >
                                <div className="card h-100">

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="card-img-top product-image p-3"
                                        style={{ objectFit: "contain", height: "200px" }}
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <small className="text-muted">
                                            Prezzo: {item.price}$
                                        </small>

                                        <p className="mt-3">
                                            <strong>Categoria:</strong> {item.category}
                                        </p>

                                        <p>
                                            <strong>Descrizione:</strong><br />
                                            {item.description}
                                        </p>

                                        <p><strong>Rate:</strong> {item.rating.rate}</p>
                                        <p><strong>Rimanente:</strong> {item.rating.count} pezzi</p>
                                    </div>

                                </div>
                            </Link>

                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Prodotti;

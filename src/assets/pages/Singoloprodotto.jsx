import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingoloProdotto() {

    const { id } = useParams();
    const [prodotto, setProdotto] = useState({});

    function fetchData() {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                console.log(response.data);
                setProdotto(response.data);
            })
            .catch((err) => console.error(err));
    }

    useEffect(fetchData, [id]);

    if (!prodotto.id) return <h2>Caricamento...</h2>;

    return (
        <>
            <div className="container d-flex justify-content-center py-4">
                <div className="card flex-row justify-content-evenly product-card">


                    <div className="d-flex justify-content-center align-items-center px-4 image-container">
                        <img src={prodotto.image} className="product-image" />
                    </div>


                    <div>
                        <div className="single-card-body card-body text-start">

                            <p>
                                <span className="bold">Categoria:</span> {prodotto.category}
                            </p>

                            <label className="bold">Descrizione:</label>
                            <p>{prodotto.description}</p>

                            <p>
                                <span className="bold">Valutazione:</span>{" "}
                                {prodotto.rating ? prodotto.rating.rate : "N/A"}
                            </p>

                            <p>
                                <span className="bold">Disponibilità:</span>{" "}
                                {prodotto.rating ? prodotto.rating.count : "N/A"} pezzi
                            </p>

                        </div>
                    </div>

                </div>
            </div>

            <div className="mt-3 text-center">
                <Link to="/products" className="btn btn-dark me-2">
                    Torna Indietro
                </Link>

                <a
                    href={`/products/${Number(id) <= 20 ? Number(id) + 1 : alert("Prodotto non trovato")}`}
                    className="btn btn-dark"
                >
                    Prodotto Successivo →
                </a>
            </div>
        </>
    );
}

import axios from "axios";
import React, {Component, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { Product } from "../../models/product";

const Products = () => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`products?page=${page}`);

                setProducts(data.data)
                setLastPage(data.meta.last_page)
            }
        )();
    }, [page]);

    const del = async (id: number) => {
        if(window.confirm('Absolutely sure you wanna delete this role?')){
            await axios.delete(`products/${id}`);

            setProducts(products.filter((p: Product) => p.id !== id));
        }
    }

    const next = () => {
        if (page < lastPage){
            setPage(page+1)
        }
    }

    const prev = () => {
        if(page >= 1) {
            setPage(page-1)
        }
    }

    return (
        <Wrapper>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((p: Product) => {
                        return (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td><img src={p.image} width="50"/></td>
                                <td>{p.title}</td>
                                <td>{p.description}</td>
                                <td>{p.price}</td>
                                <td>
                                    <div className="btn-group mr-2">
                                        <Link to={`/products/${p.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                        <a href="#" className="btn btn-sm btn-outline-secondary" onClick={() => del(p.id)}>Delete</a>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
            </div>
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={prev}>Previous</a>
                    </li>
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={next}>Next</a>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    );
}

export default Products;
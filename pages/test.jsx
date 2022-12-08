import React, { useEffect, useState } from 'react'
import IndexPage from "components/layouts/IndexPage"
import { Container, Modal, Button, Form, Image, InputGroup, Row, Col } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import data from './data';
import Header from '@/components/test/Header';
import Main from '@/components/test/Main';
import Basket from '@/components/test/Basket';
export default function TestPage() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        console.log("cartItems : ", cartItems);
    }, [cartItems])

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        console.log("exist1", exist);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    return (
        <div >
            <Header countCartItems={cartItems.length}></Header>
            <div className="row">
                <Main products={products} onAdd={onAdd} />
                <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            </div>
        </div>
    );
}
TestPage.layout = IndexPage
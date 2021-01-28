import {useState} from 'react';

import './add-product.css';

const AddProduct = ({addProduct}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const product = {name, price, description, url};
        addProduct(product);

    };

    return (
        <h1>The AddProduct component will be here</h1>
    )
};

export default AddProduct
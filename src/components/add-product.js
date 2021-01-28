import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const AddProduct = ({addProduct}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const product = {name, price, description, url};
        addProduct(product);
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Product</h1>
            <div className="form-group">
                <label>Name</label>
                <input type="text" onChange={e => setName(e.target.value)} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" onChange={e => setPrice(e.target.value)} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" onChange={e => setDescription(e.target.value)} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Image URL</label>
                <input type="text" onChange={e => setUrl(e.target.value)} className="form-control"/>
            </div>
            <button className="btn btn-primary" type="submit">Add</button>
        </form>
    )
};

export default AddProduct
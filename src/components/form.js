import {
    FormTextArea,
    FormInput,
    FormGroup,
    Form,
    Button
} from 'semantic-ui-react';
import axios from "axios";
import base_url from "../config";
import { useDispatch, useSelector } from 'react-redux';
import React, {useState} from "react";

 const ProductForm =  () => {
    // const sku = useSelector(state => state.slice.sku);
    // const quantity = useSelector(state => state.slice.quantity);
    // const name = useSelector(state => state.slice.name);
    // const description = useSelector(state => state.slice.description);
    // const image = useSelector(state => state.slice.image);

     const [sku,setSKU] = useState(null);
     const [quantity,setQuantity] = useState(null);
     const [name,setName] = useState(null);
     const [description,setDescription] = useState(null);
     const [image,setImage] = useState(null);


    const saveProduct = async () => {
        try {
            const { data } = await axios.post(base_url + "productRoute/add-product", {
                sku: sku,
                quantity: quantity,
                name: name,
                description: description,
                image: image
            });
            console.log(data);
            window.open(`/`);

        } catch (error) {
            console.error('Error saving product:', error);
        }
    }

    const valueName = (e) => setName(e.target.value);
    const valueSKU = (e) => setSKU(e.target.value);
    const valueQTY = (e) => setQuantity(e.target.value);
    const valueDisc = (e) => setDescription(e.target.value);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

     return (
        <Form>
            <FormGroup widths='3' inline>
                <FormInput fluid label='SKU' placeholder='' size={"small"} onChange={valueSKU} />
            </FormGroup>
            <FormGroup widths='2' inline>
                <FormInput fluid label='Name' placeholder='' size={"small"} onChange={valueName} />
                <FormInput fluid label='QTY' placeholder='' size={"small"} onChange={valueQTY} />
            </FormGroup>
            <FormTextArea label='Product Description' placeholder='A small description about the product...' onChange={valueDisc} />
            <FormGroup inline>
                <h4>Product Images <span><h6>JPEG, PNG, SVG or GIF <br />(Maximum file size 50mb)</h6></span></h4>
                <div style={{ marginLeft: "20px" }}>
                    <Button content="Choose File" labelPosition="left" icon="file" as="label" htmlFor="file" type="button"/>
                    <input type="file" id="file" hidden onChange={handleFileChange} accept="image/*"/>
                </div>
            </FormGroup>
            <Button onClick={saveProduct} style={{
                padding: "12px 80px",
                margin: "5px",
                backgroundColor: "#001EB9",
                color: "white",
                border: "none",
                borderRadius: "10px"
            }}>Add Product</Button>
        </Form>
    );
};

export default ProductForm;

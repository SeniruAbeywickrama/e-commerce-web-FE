import React, {useState,useEffect} from 'react';
import {
    HeaderSubheader,
    HeaderContent,
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Header,
    Image,
    Table, Icon, Button,
} from 'semantic-ui-react';
import DeleteModel from "./delete-model";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import base_url from "../config";


const TableProduct = (props) => {
    const [isFavourite,setFavourite] = useState(false);
    // const [products,setProducts] = useState(null);

    useEffect(() => {
        // console.log(props)
    },[])


    const makeFavourite = async (id) => {
        const headers = {
            id: id,
        };

        try {
            const data = await axios.put(base_url + "productRoute/mark-as-favourite",{} ,{ headers });
            console.log(data);
            window.location.reload();

        } catch (error) {
            console.error('There was an error!', error);
        }
    };



    function removeFavourite() {
        setFavourite(false)
    }

    return (
        <div style={{padding : "30px 60px"}}>
            <Table basic='very' padded='very'>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>SKU</TableHeaderCell>
                        <TableHeaderCell>Image</TableHeaderCell>
                        <TableHeaderCell>Product Name</TableHeaderCell>
                        <TableHeaderCell>Quantity</TableHeaderCell>
                        <TableHeaderCell></TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {props.props.map((products, index) => (
                        <TableRow key={index}>
                            <TableCell>{products.sku}</TableCell>
                            <TableCell>
                                {/*<Header as='h4' image>*/}
                                {/*    <HeaderContent>*/}
                                {/*        {employee.sku}*/}
                                {/*        <HeaderSubheader>{employee.sku}</HeaderSubheader>*/}
                                {/*    </HeaderContent>*/}
                                {/*</Header>*/}
                                <Image src={products.image} rounded size='mini' />
                            </TableCell>
                            <TableCell>{products.name}</TableCell>
                            <TableCell>{products.quantity}</TableCell>
                            <TableCell>
                                <div style={{display : "flex", justifyContent: 'center' , alignItems:'center'}}>
                                    <DeleteModel icon = {"trash alternate"} props = {products.sku}/>
                                    <Link to="/edit-product">
                                        <Button icon color='blue'>
                                            <Icon name='pencil alternate' />
                                        </Button>
                                    </Link>
                                    {products.isFavourite === 1 && (
                                        <Button icon onClick={removeFavourite}  color='blue'>
                                            <Icon name='star'/>
                                        </Button>
                                    )}
                                    {products.isFavourite === 0 && (
                                        <Button icon onClick={() => makeFavourite(products._id)}   color='blue'>
                                            <Icon name='star outline' />
                                        </Button>
                                    )}

                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default TableProduct;

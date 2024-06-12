import {GridRow, GridColumn, Grid, Icon} from 'semantic-ui-react'
import {Link} from "react-router-dom";

// Import the components
import TableProduct from "./table"
import {useEffect, useState} from "react";
import axios from "axios";
import base_url from "../config";
import {useDispatch} from "react-redux";


function ProductHome() {

    const dispatch = useDispatch();
    const [products,setProducts] = useState(null);


    const getProductData = async () => {
        try {
            const response = await axios.get(base_url + "productRoute/get-all-products");
            console.log(response.data.data);
            setProducts(response.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductData().then(r =>
        console.log("get all products success"))
    },[])

    console.log(products)
    if(products !== null) {
        return (
            <div className="ProductHome">
                <Grid>
                    <GridRow>
                        <GridColumn>
                            {/*<div style={{border : "1px solid black",height : "fit-content", width : "100%" }}>*/}
                            {/*</div>*/}
                            <Grid>
                                <GridRow>
                                    <div style={{
                                        position: "fixed",
                                        width: "100%",
                                        padding: "15px",
                                        backgroundColor: "white",
                                        zIndex: "1000"
                                    }}>
                                        <GridColumn width={16}>
                                            <Grid>
                                                <GridRow>
                                                    <GridColumn width={12}>
                                                        <div style={{height: "40px", width: "100%"}}></div>
                                                    </GridColumn>
                                                    <GridColumn width={2}>
                                                        <div style={{
                                                            height: "40px",
                                                            width: "100%",
                                                            textAlign: "center",
                                                            padding: "10px"
                                                        }}>
                                                            <h5>ADMIN</h5>
                                                        </div>
                                                    </GridColumn>
                                                    <GridColumn width={2}>
                                                        <div style={{
                                                            height: "40px",
                                                            width: "100%",
                                                            textAlign: "center",
                                                            padding: "5px"
                                                        }}>
                                                            <div style={{
                                                                height: "30px",
                                                                width: "30px",
                                                                backgroundColor: "#001EB9",
                                                                borderRadius: "50%"
                                                            }}>
                                                            </div>
                                                        </div>
                                                    </GridColumn>
                                                </GridRow>
                                            </Grid>
                                        </GridColumn>
                                        <GridColumn width={16}>
                                            <div style={{
                                                height: "50px",
                                                width: "100%",
                                                paddingLeft: "40px",
                                                letterSpacing: "10px"
                                            }}>
                                                <h1>PRODUCTS</h1>
                                            </div>
                                        </GridColumn>
                                        <GridColumn width={16}>
                                            <Grid>
                                                <GridRow>
                                                    <GridColumn width={11}>
                                                        <div style={{height: "40px", width: "100%"}}></div>
                                                    </GridColumn>
                                                    <GridColumn width={3}>
                                                        <div style={{height: "40px", width: "100%"}}>
                                                            <Link to="/add-product">
                                                                <button style={{
                                                                    padding: "12px 80px",
                                                                    margin: "5px",
                                                                    backgroundColor: "#001EB9",
                                                                    color: "white",
                                                                    border: "none",
                                                                    borderRadius: "10px",
                                                                    animation: "ease-in"
                                                                }}>New Product
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </GridColumn>
                                                    <GridColumn width={2}>
                                                        <div style={{height: "40px", width: "100%"}}>
                                                            <Link to="/favourite-product">
                                                                <button style={{
                                                                    padding: "12px 12px",
                                                                    margin: "5px",
                                                                    backgroundColor: "#001EB9",
                                                                    color: "white",
                                                                    border: "none",
                                                                    borderRadius: "10px"
                                                                }}>
                                                                    <Icon name='star'/>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </GridColumn>

                                                </GridRow>
                                            </Grid>
                                        </GridColumn>
                                    </div>
                                    <GridColumn width={16}>
                                        <div style={{height: "fit-content", width: "100%", marginTop: "170px"}}>
                                            <TableProduct props={products}/>
                                        </div>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </div>
        );
    }
}

export default ProductHome;

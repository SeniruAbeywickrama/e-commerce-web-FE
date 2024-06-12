import {Grid, GridColumn, GridRow, Icon} from "semantic-ui-react";
import ProductForm from "./form";
import {Link} from "react-router-dom";

function AddProducts() {
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
                                            paddingLeft: "140px",
                                            letterSpacing: "10px",
                                            display: "flex"
                                        }}>
                                            <Link to="/">
                                                <h1 style={{color: "black"}}>PRODUCTS <span><h4
                                                    style={{color: "#001EB9"}}>Add new products</h4></span></h1>
                                            </Link>
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
                                                        <button style={{
                                                            padding: "12px 80px",
                                                            margin: "5px",
                                                            backgroundColor: "#001EB9",
                                                            color: "white",
                                                            border: "none",
                                                            borderRadius: "10px"
                                                        }}>New Product
                                                        </button>
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
                                    <div style={{
                                        height: "fit-content",
                                        width: "100%",
                                        marginTop: "170px",
                                        padding: "20px 150px"
                                    }}>
                                        <ProductForm/>
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

export default AddProducts;

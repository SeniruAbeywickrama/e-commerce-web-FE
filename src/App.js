import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


// Import the pages
import ProductHome from "../src/components/products-home"
import FavouriteProducts from "../src/components/favourite-products"
import EditProducts from "../src/components/edit-product"
import ProductDetails from "../src/components/product-details"
import AddProducts from "../src/components/add-products"
import SearchProducts from "../src/components/search-products"
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<ProductHome/>} />
                        <Route exact path="add-product" element={<AddProducts/>} />
                        <Route exact path="product-details" element={<ProductDetails/>} />
                        <Route exact path="edit-product" element={<EditProducts/>} />
                        <Route exact path="favourite-product" element={<FavouriteProducts />} />
                        <Route exact path="search-product" element={<SearchProducts />} />
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}
export default App;

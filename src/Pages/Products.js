import { Link } from 'react-router-dom';
import ProductCard from '../partials/ProductCard';

const Products = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row-content">
                        <h1>All products</h1>
                        <p>Choose Category</p>
                        <div className="btn-group-lt">
                            <Link to={'construction'} className="btn-outline">Construction</Link>
                            <Link to={'plumbering'} className="btn-outline">Plumbering</Link>
                            <Link to={'floors'} className="btn-outline">Floors</Link>
                            <Link to={'paint'} className="btn-outline">Paint</Link>
                            <Link to={'tools'} className="btn-outline">ToolsEquipments</Link>
                        </div>
                    </div>
                    <div className="row justify-center">
                        <div className="col-lg-3 col-md-6">
                            <ProductCard 
                                name={"Cement"}
                                imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigi57eIUVcsgrhXOI4PloLfBrabbzawm0FA&s"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <ProductCard 
                                name={"Ironsheets"}
                                imgUrl={"https://png.pngtree.com/png-vector/20251012/ourmid/pngtree-corrugated-iron-sheet-black-white-vector-png-image_16866118.webp"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <ProductCard 
                                name={"Steel bars"}
                                imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcuWe-ybEVOqxEVjNggacRCCl2YdarBVgtA&s"}
                            />
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <ProductCard 
                                name={"Steel bars"}
                                imgUrl={"https://png.pngtree.com/png-vector/20241002/ourmid/pngtree-steel-rebar---rod-on-transparent-background-png-image_13995640.png"}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products;

import React from 'react';
import Section from '../partials/Section';
import ProductCard from '../partials/ProductCard';

const Plumbering = () => {
    return (
        <Section title={"Plumbering"} info={"Plumbering products and tools"} >
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
        </Section>
    );
}

export default Plumbering;

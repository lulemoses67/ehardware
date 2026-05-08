import React from 'react';
import Section from '../partials/Section';

const Whyus = () => {
    return (
        <>
            <Section title={"Why Us"} info={"For the best hardware products and tools"} class_name={'bg-detail text-white'}>
                <h2>Our Categories</h2>
                <br />
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className='text-danger'>Construction</h2>
                        <p>At eHardware, we believe that whether you’re a professional contractor on a job site or a weekend warrior tackling your first DIY project, you deserve access to the same high-quality equipment. We aren't just an online store; we are a digital toolbox built by people who know their way around a workshop</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h2 className='text-danger'>Plumbering</h2>
                        <p>At eHardware, we believe that whether you’re a professional contractor on a job site or a weekend warrior tackling your first DIY project, you deserve access to the same high-quality equipment. We aren't just an online store; we are a digital toolbox built by people who know their way around a workshop</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h2 className='text-danger'>Hardware Tools</h2>
                        <p>At eHardware, we believe that whether you’re a professional contractor on a job site or a weekend warrior tackling your first DIY project, you deserve access to the same high-quality equipment. We aren't just an online store; we are a digital toolbox built by people who know their way around a workshop</p>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default Whyus;

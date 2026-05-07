import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="hero row align-center">
      <div className="container">
        <div className="row-content text-center">
        <img className='d-none-xs' src="https://www.nicepng.com/png/detail/145-1452311_construction-tools-png-hardware-store.png" alt="hardware tools" />
        <h2 className="hero-title">All Hardware Products</h2>
        <p className='bg-detail text-primary text'>
            <TypeAnimation
            sequence={[
                'Construction', // First string
                2000,                    // Wait 2s
                'Plumbering', // Second string
                2000,                    // Wait 2s
                'Furniture',           // Third string
                2000                     // Wait 2s
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </p>
            <p>Find all the best hardware products and tools</p>
            <button className="btn-primary">Products</button>
            <button className="btn-primary">Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
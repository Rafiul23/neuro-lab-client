import { Link } from 'react-router-dom';
import bannerImg from '../../assets/bannerImg.jpg';
import { useState } from 'react';

const Banner = () => {

    const [banner, setBanner] = useState(bannerImg);

    return (
        <div>
            <div className="hero lg:h-[550px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       <Link to='/alltests'>
                       <button className="btn bg-[#1fc281] text-white">All Tests</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
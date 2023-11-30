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
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Neuro Lab</h1>
                        <p className="mb-5 text-xl">Use the promocode <span className="p-1 rounded-lg text-yellow-400 text-3xl font-bold">NEU2024</span> to get <span className="p-1 rounded-lg text-yellow-400 text-3xl font-bold">10% Discount</span></p>
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
import labImg from '../../assets/lab.jpg';

const About = () => {
    return (
        <div className='p-4'>
            <h2 className="text-3xl my-4 text-center text-[#1fc281] font-bold">About Us</h2>
            <img src={labImg} alt="" />

            <p className='p-4'>At our diagnostic center, we merge cutting-edge technology with compassionate care to prioritize your health. With a dedicated team of experienced professionals, we offer comprehensive diagnostic services tailored to your needs. Our commitment extends beyond accuracy; we strive to create a seamless patient experience, providing clarity and support throughout your journey. From state-of-the-art equipment to a welcoming environment, we prioritize excellence in service, accuracy in diagnostics, and empathy in patient care. Trust us to be your reliable partner in health, dedicated to empowering individuals through precise diagnostics and a commitment to your overall well-being.</p>
        </div>
    );
};

export default About;
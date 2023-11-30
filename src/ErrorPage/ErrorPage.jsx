import { Link } from 'react-router-dom';
import Img from '../assets/notFound.gif' 

const ErrorPage = () => {
    return (
        <div>
          <img src={Img} alt="" />
          <p className='text-2xl text-green-500'>Back to <Link to='/'>Home</Link></p>
        </div>
    );
};

export default ErrorPage;
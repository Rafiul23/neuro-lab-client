import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import TestCard from '../TestCard/TestCard';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Featured = () => {

    const [featured, setFeatured] = useState([]);
    const axiosPublic = useAxiosPublic();

    // useEffect(() => {
    //     fetch('featured.json')
    //         .then(res => res.json())
    //         .then(data => setFeatured(data))
    // }, [])

    axiosPublic.get('/featured')
    .then(data => setFeatured(data.data))

    return (
        <div className='pt-10'>
            <SectionTitle
            heading='Our Featured Tests'
            subheading='Check our Featured tests'
            ></SectionTitle>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4'>
                {
                    featured.map(test => <TestCard test={test}></TestCard>)
                }
            </div>
        </div>
    );
};

export default Featured;
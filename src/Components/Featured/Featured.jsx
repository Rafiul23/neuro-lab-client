import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import TestCard from '../TestCard/TestCard';

const Featured = () => {

    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        fetch('featured.json')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])

    return (
        <div>
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
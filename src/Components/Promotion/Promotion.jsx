import SectionTitle from "../SectionTitle/SectionTitle";
import doctor1 from '../../assets/doctor1.jpg'
import doctor2 from '../../assets/doctor2.jpg'
import doctor3 from '../../assets/doctor3.jpg'

const Promotion = () => {
    return (
        <div className="py-10">
            <SectionTitle
            subheading='Hurry Up'
            heading='Special offers are going on!!!'
            ></SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
                <div className="shadow-xl bg-green-400">
                    <img src={doctor1} />
                    <div className="text-center p-3">
                    <h2 className="text-2xl font-bold">Jenifer Catherine</h2>
                    <p>Neurologist</p>
                    <p className="text-red-500 font-bold">10% off for today</p>
                    </div>
                </div>
                <div className="shadow-xl bg-green-400">
                    <img src={doctor2}  />
                    <div className="text-center p-3">
                    <h2 className="text-2xl font-bold">Arthur Millar</h2>
                    <p>Nephrologist</p>
                    <p className="text-red-500 font-bold">15% off for today</p>
                    </div>
                </div>
                <div className="shadow-xl bg-green-400">
                    <img src={doctor3}  />
                    <div className="text-center p-3">
                    <h2 className="text-2xl font-bold">Michael Max</h2>
                    <p>Eye Specialist</p>
                    <p className="text-red-500 font-bold">10% off for every Sunday</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;


const SectionTitle = ({subheading, heading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center py-4">
            <p className="text-[#1fc281] mb-4">---{subheading}---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
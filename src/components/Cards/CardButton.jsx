import DownArrow from '../Icons/CardIcons/DownArrow';

const CardButton = ({ label }) => {
	return (
		<button
			className={`flex items-center px-6 py-4 gap-4 w-fit bg-[#EBECF5] rounded-tr-[2rem] relative hover:bg-[#FFD540] hover:-translate-y-[0.375rem] hover:shadow-[8.25px_6px_0px_#3C479D] transition ease delay-150}`}>
			<span className='text-base font-medium'>{label}</span>
			<DownArrow />
		</button>
	);
};

export default CardButton;

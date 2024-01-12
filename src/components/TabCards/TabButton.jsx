const TabButton = ({ label, setShowMyModal }) => {
	const handleClick = (e) => {
		e.stopPropagation();
		setShowMyModal(true);
	};
	return (
		<button
			onClick={handleClick}
			className='flex border-[0.187rem] border-black items-center px-6 py-4 gap-4 w-fit bg-[#F15A29] rounded-[2.5rem] relative hover:bg-[#FFD540] hover:-translate-y-[0.375rem] hover:shadow-[8.25px_6px_0px_#3C479D] transition ease delay-150'>
			<span className='text-xl font-semibold'>{label}</span>
		</button>
	);
};

export default TabButton;

const DownArrowAccordion = ({ accordionIsOpen }) => {
	return (
		<svg className='ml-8 shrink-0' xmlns='http://www.w3.org/2000/svg' width='13' height='8' viewBox='0 0 13 8' fill='none'>
			<path
				d='M11.5 1.77246L6.5 6.77246L1.5 1.77246'
				stroke='black'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className={`transform origin-center transition duration-150 ease-in-out ${accordionIsOpen && '!rotate-180'}`}
			/>
		</svg>
	);
};

export default DownArrowAccordion;

import { useState } from 'react';
import accordionData from '../../../accordionData.js';
import Modal from '../Modal/Modal.jsx';
import Accordion from './Accordion';
import TabButton from './TabButton.jsx';

const TabCard = ({ title, description }) => {
	const [showMyModal, setShowMyModal] = useState(false);

	const dontShowMyModal = () => {
		setShowMyModal(false);
	};
	return (
		<div className='gap-10 rounded-lg px-16 py-14 bg-[#FFE58C] lg:rounded-[2.5rem] flex flex-col lg:flex-row lg:justify-between'>
			<div className='flex flex-col gap-6 lg:gap-0 lg:basis-2/4'>
				<p className='text-3xl font-semibold lg:pb-6 lg:text-5xl xl:text-balance'>{title}</p>
				<p className='text-xl font-normal lg:pb-12 lg:text-2xl lg:max-w-full'>{description}</p>
				<div className='hidden lg:block'>
					<TabButton label='Discover Product' setShowMyModal={setShowMyModal} />
				</div>
				<Modal onClose={dontShowMyModal} visible={showMyModal} />
			</div>
			<div className='flex flex-col lg:basis-2/4'>
				{accordionData.map((item) => {
					return <Accordion key={item.id} title={item.title} icon={item.icon} description={item.description} />;
				})}
			</div>
			<div className='block lg:hidden'>
				<TabButton label='Discover Product' setShowMyModal={setShowMyModal} />
			</div>
		</div>
	);
};

export default TabCard;

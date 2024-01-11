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
		<div className='lg:flex lg:flex-row lg:justify-between lg:gap-16 bg-[#FFE58C] lg:rounded-[2.5rem] rounded-3xl px-16 py-14 lg:w-full'>
			<div>
				<p className='pb-6 text-5xl font-semibold xl:text-balance text-wrap'>{title}</p>
				<p className='pb-12 text-2xl font-normal text-wrap'>{description}</p>
				<TabButton label='Discover Product' setShowMyModal={setShowMyModal} />
				<Modal onClose={dontShowMyModal} visible={showMyModal} />
			</div>

			<div>
				{accordionData.map((item) => {
					return <Accordion key={item.id} title={item.title} icon={item.icon} description={item.description} />;
				})}
			</div>
		</div>
	);
};

export default TabCard;

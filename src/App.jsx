import { useState } from 'react';
import cardData from '../cardData.js';
import Card from './components/Cards/Card';
import TabCard from './components/TabCards/TabCard';
import TabContentWrapper from './components/Wrappers/TabContentWrapper';

function App() {
	const [activeTab, setActiveTab] = useState('tab1');
	return (
		<section className='max-w-[108rem] flex flex-col items-center m-4 pt-32 px-12'>
			<h1 className='font-semibold text-[1.75rem] lg:text-[2.5rem] pb-2'>Section Title</h1>
			<h2 className='text-lg font-medium lg:text-2xl'>Section Subtitle</h2>
			<div className='flex flex-col gap-[0.812rem] mt-[1.9rem] lg:flex-row'>
				{cardData.map((card) => (
					<>
						<Card
							key={card.id}
							title={card.title}
							description={card.description}
							icon={card.icon}
							buttonLabel={card.button.title}
							id={card.id}
							setActiveTab={setActiveTab}
							activeTab={activeTab}
						/>
					</>
				))}
			</div>

			<div className='hidden mt-10 lg:block'>
				{cardData.map((tabData) => (
					<TabContentWrapper key={tabData.id} id={tabData.id} activeTab={activeTab}>
						<TabCard title={tabData.content.title} description={tabData.content.description} />
					</TabContentWrapper>
				))}
			</div>
		</section>
	);
}

export default App;

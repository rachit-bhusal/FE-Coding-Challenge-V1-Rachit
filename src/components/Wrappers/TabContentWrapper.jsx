const TabContentWrapper = ({ id, activeTab, children }) => {
	return activeTab === id ? <div className='TabContentWrapper'>{children}</div> : null;
};

export default TabContentWrapper;

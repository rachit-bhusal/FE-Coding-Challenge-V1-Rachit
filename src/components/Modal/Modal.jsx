const Modal = ({ visible, onClose }) => {
	const handleOnClose = (e) => {
		if (e.target.id === 'container') onClose();
	};

	if (!visible) return null;

	return (
		<div onClick={handleOnClose} id='container' className='fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm'>
			<div
				id='bubble'
				className='flex p-12 border rounded-lg border-[#CCCCCC] bg-white text-black  overflow-hidden justify-center items-center hover:shadow-md transition ease-in delay-150'>
				<p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<button
					onClick={onClose}
					className='border-[0.187rem] border-black items-center p-3 bg-[#F15A29] rounded-[2.5rem] hover:bg-[#FFD540] hover:-translate-y-[0.375rem] hover:shadow-[8.25px_6px_0px_#3C479D] transition ease delay-150 w-1/4'>
					Close
				</button>
			</div>
		</div>
	);
};

export default Modal;

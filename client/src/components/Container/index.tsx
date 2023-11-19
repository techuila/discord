import React from 'react';

function Container({ children }: React.PropsWithChildren) {
	return (
		<div className='h-screen w-screen relative overflow-auto'>{children}</div>
	);
}

export default Container;

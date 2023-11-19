type Props = {
	variant?: 'primary' | 'secondary' | 'neutral' | 'danger';
	size?: 'small' | 'medium' | 'large';
};

function Button({
	children,
	variant,
	size,
	...htmlProps
}: React.PropsWithChildren<Props>) {
	return (
		<button className='btn btn-primary text-white' {...htmlProps}>
			{children}
		</button>
	);
}

export default Button;

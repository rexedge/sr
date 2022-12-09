import React from 'react';

export default function RXInput({
	type = 'text',
	label,
	value,
	onChange,
	errormessage,
	successmessage,
	placeholder,
}) {
	return (
		<div className='my-2'>
			{label && (
				<label
					for='text_input'
					className='form-label mb-1'
					style={{
						fontSize: '1rem',
					}}
				>
					{label}
				</label>
			)}
			{type === 'textarea' ? (
				<textarea
					type={type}
					className='form-control'
					id='text_input'
					aria-describedby='emailHelp'
					value={value}
					placeholder={placeholder}
					onChange={(e) => onChange && onChange(e.target.value)}
					style={{
						fontSize: '0.9rem',
					}}
				/>
			) : (
				<input
					type={type}
					className='form-control'
					id='text_input'
					aria-describedby='emailHelp'
					value={value}
					placeholder={placeholder}
					onChange={(e) => onChange && onChange(e.target.value)}
					style={{
						fontSize: '0.9rem',
					}}
				/>
			)}

			{errormessage && (
				<div
					id='emailHelp'
					className='errormessage'
					style={{
						color: 'red',
						fontSize: '0.8rem',
					}}
				>
					*{errormessage}
				</div>
			)}
			{successmessage && (
				<div
					id='emailHelp'
					className='successmessage'
					style={{
						color: 'green',
						fontSize: '0.8rem',
					}}
				>
					*{successmessage}
				</div>
			)}
		</div>
	);
}

import React from 'react';
import classes from './button.module.css';
import Link from 'next/link';

const Button = ({ text, url }) => {
	return (
		<Link href={url}>
			<button className={classes.container}>{text}</button>
		</Link>
	);
};

export default Button;

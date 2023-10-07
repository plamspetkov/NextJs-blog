'use client';

import React, { useContext } from 'react';
import classes from './darkModeToggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';

const DarkModeToggle = () => {
	const { toggle, mode } = useContext(ThemeContext);
	return (
		<div className={classes.container} onClick={toggle}>
			<div className={classes.icon}>🌙</div>
			<div className={classes.icon}>🔆</div>
			<div
				className={classes.ball}
				style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
			/>
		</div>
	);
};

export default DarkModeToggle;

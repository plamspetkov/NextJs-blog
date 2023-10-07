import React from 'react';
import classes from './page.module.css';

const Layout = ({ children }) => {
	return (
		<div>
			<h1 className={classes.mainTitle}>Our Works</h1>
			{children}
		</div>
	);
};

export default Layout;

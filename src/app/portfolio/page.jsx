import React from 'react';
import classes from './page.module.css';
import Link from 'next/link';

const Portfolio = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.selectTitle}>Choose a gallery</h1>
			<div className={classes.items}>
				<Link href="/portfolio/illustrations" className={classes.item}>
					<span className={classes.title}>Illustrations</span>
				</Link>
				<Link href="/portfolio/websites" className={classes.item}>
					<span className={classes.title}>Websites</span>
				</Link>
				<Link href="/portfolio/applications" className={classes.item}>
					<span className={classes.title}>Application</span>
				</Link>
			</div>
		</div>
	);
};

export default Portfolio;

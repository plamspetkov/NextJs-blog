import React from 'react';
import classes from './footer.module.css';
import Image from 'next/image';
const Footer = () => {
	return (
		<footer className={classes.container}>
			<div>©2023 Plama. All rights reserved</div>
			<div className={classes.social}>
				{/* <div className={classes.imgContainer}>
				<Image src="/1.png" alt="logo" fill={true} />
			</div> */}
				<Image
					src="/1.png"
					alt="logo"
					width={15}
					height={15}
					className={classes.icon}
				/>
				<Image
					src="/2.png"
					alt="logo"
					width={15}
					height={15}
					className={classes.icon}
				/>
				<Image
					src="/3.png"
					alt="logo"
					width={15}
					height={15}
					className={classes.icon}
				/>
				<Image
					src="/4.png"
					alt="logo"
					width={15}
					height={15}
					className={classes.icon}
				/>
			</div>
		</footer>
	);
};

export default Footer;

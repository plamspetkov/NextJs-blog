import React from 'react';
import classes from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
	return (
		<div className={classes.container}>
			<div className={classes.imgContainer}>
				<Image
					src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					fill={true}
					alt=""
					className={classes.img}
				/>
				<div className={classes.imgText}>
					<h1 className={classes.imgTitle}>Digital Storytellers</h1>
					<h2 className={classes.imgDesc}>
						Handcrafting award winning digital experiences
					</h2>
				</div>
			</div>
			<div className={classes.textContainer}>
				<div className={classes.item}>
					<h1 className={classes.title}>Who Are We?</h1>
					<p className={classes.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
						suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
						eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
						beatae, a suscipit eos. Animi quibusdam cum omnis officiis
						<br />
						<br />
						voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
						esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
						officiis voluptatum quo ea eveniet?
					</p>
				</div>
				<div className={classes.item}>
					<h1 className={classes.title}>What We Do?</h1>
					<p className={classes.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
						suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
						eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
						Creative Illustrations
						<br />
						<br /> - Dynamic Websites
						<br />
						<br /> - Fast and Handy
						<br />
						<br /> - Mobile Apps
					</p>
					<Button url="/contact" text="Contact" />
				</div>
			</div>
		</div>
	);
};

export default About;

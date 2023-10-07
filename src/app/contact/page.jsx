import React from 'react';
import classes from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button/Button';

export const metadata = {
	title: 'Contact PLama Dev',
	description: 'This is the contact page',
};
const Contact = () => {
	return (
		<div className={classes.container}>
			<h1 className={classes.title}>"Let's Keep in Touch"</h1>
			<div className={classes.content}>
				<div className={classes.imgContainer}>
					<Image
						src="/contact.png"
						alt=""
						fill={true}
						className={classes.image}
					/>
				</div>
				<form className={classes.form}>
					<input type="text" placeholder="name" className={classes.input} />
					<input type="text" placeholder="email" className={classes.input} />
					<textarea
						className={classes.textArea}
						placeholder="message"
						cols="30"
						rows="10"
					></textarea>
					<Button url="#" text="Send" />
				</form>
			</div>
		</div>
	);
};

export default Contact;

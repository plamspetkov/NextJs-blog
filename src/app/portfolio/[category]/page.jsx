import React from 'react';
import classes from './page.module.css';
import { items } from './data.js';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import { notFound } from 'next/navigation';

const getData = (cat) => {
	const data = items[cat];

	if (data) {
		return data;
	}

	return notFound();
};

const Category = ({ params }) => {
	const data = getData(params.category);
	return (
		<div className={classes.container}>
			<h1 className={classes.catTitle}>{params.category}</h1>

			{data.map((item) => (
				<div className={classes.item} key={item.id}>
					<div className={classes.content}>
						<h1 className={classes.title}>{item.title}</h1>
						<p className={classes.desc}>{item.desc}</p>
						<Button text="See More" url="#" />
					</div>
					<div className={classes.imgContainer}>
						<Image
							className={classes.img}
							fill={true}
							src={item.image}
							alt=""
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Category;

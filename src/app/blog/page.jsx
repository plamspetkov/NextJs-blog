import React from 'react';
import classes from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
	const res = await fetch('http://localhost:3000/api/posts', {
		cache: 'no-store',
	});
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

const Blog = async () => {
	const data = await getData();
	console.log(data);
	return (
		<div className={classes.mainContainer}>
			{data.map((item) => (
				<Link
					key={item.id}
					href={`/blog/${item._id}`}
					className={classes.container}
				>
					<div className={classes.imgContainer}>
						<Image
							src={item.img}
							alt=""
							width={400}
							height={250}
							className={classes.img}
						/>
					</div>
					<div className={classes.item}>
						<div className={classes.content}>
							<h1 className={classes.title}>{item.title}</h1>
							<p className={classes.desc}>{item.desc}</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Blog;

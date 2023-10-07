import React from 'react';
import classes from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(id) {
	const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
		cache: 'no-store',
	});
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		return notFound();
	}

	return res.json();
}

// or Dynamic metadata
export async function generateMetadata({ params }) {
	const post = await getData(params.id);
	return {
		title: post.title,
		description: post.desc,
	};
}

const BlogPost = async ({ params }) => {
	const data = await getData(params.id);
	console.log(data);
	return (
		<div className={classes.container}>
			<div className={classes.top}>
				<div className={classes.info}>
					<h1 className={classes.title}>{data.title}</h1>
					<p className={classes.desc}>{data.desc}</p>
					<div className={classes.author}>
						<Image
							src={data.img}
							alt=""
							width={40}
							height={40}
							className={classes.avatar}
						/>
						<span className={classes.username}>name</span>
					</div>
				</div>
				<div className={classes.imageContainer}>
					<Image src={data.img} alt="" fill={true} className={classes.image} />
				</div>
			</div>
			<div className={classes.content}>
				<p className={classes.text}>{data.content}</p>
			</div>
		</div>
	);
};

export default BlogPost;

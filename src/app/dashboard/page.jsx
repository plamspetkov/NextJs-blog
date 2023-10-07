'use client';
import React, { useEffect, useState } from 'react';
import classes from './page.module.css';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Dashboard = () => {
	// const [data, setData] = useState([]);
	// const [err, setErr] = useState(false);
	// const [isLoading, setIsLoading] = useState(false);

	// useEffect(() => {
	// 	const getData = async () => {
	// 		setIsLoading(true);
	// 		const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
	// 			cache: 'no-store',
	// 		});
	// 		// The return value is *not* serialized
	// 		// You can return Date, Map, Set, etc.

	// 		if (!res.ok) {
	// 			// This will activate the closest `error.js` Error Boundary
	// 			setErr(true);
	// 		}

	// 		const data = await res.json();

	// 		setData(data);
	// 		setIsLoading(false);
	// 	};
	// 	getData();
	// }, []);

	const session = useSession();

	const router = useRouter();

	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	// const { data, error, isLoading } = useSWR(
	// 	'https://jsonplaceholder.typicode.com/posts',
	// 	fetcher
	// );
	const { data, mutate, error, isLoading } = useSWR(
		`/api/posts?username=${session?.data?.user.name}`,
		fetcher
	);

	console.log(data);

	if (session.status === 'loading') {
		return <p>Loading...</p>;
	}

	if (session.status === 'unauthenticated') {
		router.push('/dashboard/login');
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const title = e.target[0].value;
		const desc = e.target[1].value;
		const img = e.target[2].value;
		const content = e.target[3].value;

		try {
			await fetch('/api/posts', {
				method: 'POST',
				body: JSON.stringify({
					title,
					desc,
					img,
					content,
					username: session.data.user.name,
				}),
			});
			mutate();
			e.target.reset();
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = async (id) => {
		try {
			await fetch(`/api/posts/${id}`, {
				method: 'DELETE',
			});
			mutate();
		} catch (err) {
			console.log(err);
		}
	};

	if (session.status === 'authenticated') {
		return (
			<div className={classes.container}>
				<div className={classes.posts}>
					{isLoading
						? 'Loading...'
						: data?.map((post) => (
								<div className={classes.post} key={post._id}>
									<div className={classes.imgContainer}>
										<Image src={post.img} alt="" width={200} height={100} />
									</div>
									<h2 className={classes.postTitle}>{post.title}</h2>
									<span
										className={classes.delete}
										onClick={() => handleDelete(post._id)}
									>
										X
									</span>
								</div>
						  ))}
				</div>
				<form className={classes.new} onSubmit={handleSubmit}>
					<h1>Add New Post</h1>
					<input type="text" placeholder="Title" className={classes.input} />
					<input type="text" placeholder="Desc" className={classes.input} />
					<input type="text" placeholder="Image" className={classes.input} />
					<textarea
						placeholder="Content"
						className={classes.textArea}
						cols="30"
						rows="10"
					></textarea>
					<button className={classes.button}>Send</button>
				</form>
			</div>
		);
	}
};

export default Dashboard;

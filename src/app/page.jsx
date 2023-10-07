import Image from 'next/image';
import classes from './page.module.css';
import Hero from 'public/hero.png';
import Button from '@/components/Button/Button';

export default function Home() {
	return (
		<div className={classes.container}>
			<div className={classes.item}>
				<h1 className={classes.title}>
					Better design for your digital products.
				</h1>
				<p className={classes.desc}>
					Turning your Idea into Reality. We bring together the teams from the
					global tech industry.
				</p>
				<Button url="/portfolio" text="See Our Works" />
			</div>
			<div className={classes.item}>
				<Image src={Hero} alt="hero" className={classes.img} />
			</div>
		</div>
	);
}

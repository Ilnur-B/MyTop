import React, { useState } from 'react';
import { Htag, Tag, Button, P, Rating } from '../components';
import { Layout } from '../layout/Layout';


export default function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);

	const [rating, setRating] = useState<number>(3);
	return (
		<Layout>
			<Htag tag='h1'>{counter}</Htag>
			<Button appearence='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>push</Button>
			<Button appearence='ghost' arrow='down'>push</Button>
			<P size='small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, excepturi?</P>
			<P size='medium'>medium</P>
			<P>default</P>
			<P size='large'>large</P>
			<Tag size='medium' color='primary'>large</Tag>
			<Tag size='small' color='green'>large</Tag>
			<Tag size='small' color='green' href='sadfafasdf'>large</Tag>
			<Tag size='small' color='red'>large</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />

		</Layout>
	);
}

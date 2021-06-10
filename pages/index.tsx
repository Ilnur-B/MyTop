import React, { useState } from 'react';
import { Htag, Tag, Button, P, Rating } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '../interfaces/menu.interface';



function Home({ menu }: HomeProps): JSX.Element {
	const [counter, setCounter] = useState<number>(0);

	const [rating, setRating] = useState<number>(3);
	return (
		<>
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

			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>

		</>
	);
}


export const getStaticProps: GetStaticProps<HomeProps> = async () => {				/* функция получения данных с сервера */
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;

}
export default withLayout(Home);				/*  HOCconponent оборачивает содержимое компонента,
													export default начало рендера страницы */

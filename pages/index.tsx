import React from 'react';
import { Htag } from '../components';
import { Button } from '../components';
import { P } from '../components';


export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>sdfsd</Htag>
			<Button appearence='primary' arrow='right'>push</Button>
			<Button appearence='ghost' arrow='down'>push</Button>
			<P size='small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, excepturi?</P>
		</>
	);
}

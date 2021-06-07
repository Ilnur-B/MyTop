import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>MyTop - лучший топ</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;

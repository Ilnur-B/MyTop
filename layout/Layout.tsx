import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';
import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {			//используется только для HOC
	return <div {...props}>
		<Header />
		<div>
			<Sidebar />
			<div>
				{children}
			</div>
		</div>
		<Footer />
	</div>;
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {				// HOC выносить в отдельный файл
	return function withLayotComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);

	};
};
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';
import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
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
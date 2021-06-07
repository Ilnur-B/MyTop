import { ButtonProps } from './button.props';
import styles from './button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ appearence, children, arrow = 'none', ...props }: ButtonProps): JSX.Element => {
	return (
		< button className={cn(styles.button, {
			[styles.primary]: appearence == 'primary',
			[styles.ghost]: appearence == 'ghost',

		})
		}

			{...props}>

			{children}
			{arrow != 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down',
				[styles.right]: arrow == 'right',

			})}>
				<ArrowIcon />
			</span>}
		</button >
	);
};
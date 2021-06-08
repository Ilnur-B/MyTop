import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 'small', children, className, color, href, ...props }: TagProps): JSX.Element => {
	return <div className={cn(styles.tag, className, {
		[styles.small]: size == 'small',
		[styles.medium]: size == 'medium',
		[styles.ghost]: color == 'ghost',
		[styles.red]: color == 'red',
		[styles.green]: color == 'green',
		[styles.primary]: color == 'primary',
		[styles.grey]: color == 'grey'
	})}
		{...props}
	>
		{
			href
				? <a href={href}>{children}</a>
				: <>{children}</>
		}

	</div >;
}
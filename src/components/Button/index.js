import styles from './button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

function Button({
    children,
    href,
    to,
    onClick,
    primary,
    outline,
    text = false,
    small = false,
    disabled = false,
    large = false,
    iconLeft,
    iconRight,
    ...passProps
}) {
    const cx = classNames.bind(styles);
    const props = {
        onClick,
        ...passProps,
    };
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        small,
        large,
        disabled,
    });

    if (disabled) {
        Object.keys(props).forEach((prop) => {
            if (prop.startsWith('on') && typeof props[prop] === 'function') {
                delete props[prop];
            }
        });
    }

    let Comp = 'button';

    if (href) {
        Comp = 'a';
        props.href = href;
    } else if (to) {
        Comp = Link;
        props.to = to;
    }

    return (
        <Comp className={classes} {...props}>
            <span className={cx('icon')}>{iconLeft}</span>
            <span className={cx('title')}>{children}</span>
            <span className={cx('icon')}>{iconRight}</span>
        </Comp>
    );
}

export default Button;

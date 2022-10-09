import classNames from 'classnames/bind';
import styles from './popper.module.scss';

function WrapperPopper({ children }) {
    const cx = classNames.bind(styles);
    return <div className={cx('wrapper')}>{children}</div>;
}

export default WrapperPopper;

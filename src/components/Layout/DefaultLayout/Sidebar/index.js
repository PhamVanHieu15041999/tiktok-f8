import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

function Sidebar() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <h1>Sidebar</h1>
        </div>
    );
}

export default Sidebar;

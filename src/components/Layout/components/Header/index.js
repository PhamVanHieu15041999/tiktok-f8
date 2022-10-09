import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '~/assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { WrapperPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

function Header() {
    const cx = classNames.bind(styles);
    const [textSearch, setTextSearch] = useState('');
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={image.logo} alt="logo" />
                <Tippy
                    visible={textSearch.length > 0}
                    interactive={true}
                    onClickOutside={() => setTextSearch('')}
                    render={(attrs) => (
                        <div className={cx('search_result')} {...attrs}>
                            <WrapperPopper>
                                <h4 className={cx('search_title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </WrapperPopper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Tìm kiếm tài khoản và video"
                            onChange={(e) => {
                                setTextSearch(e.target.value);
                            }}
                            spellCheck={false}
                        />
                        <div className={cx('search_icon')}>
                            <img src={image.close} alt="cancle" />
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                        <button className={cx('search_button')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}></div>
            </div>
        </div>
    );
}

export default Header;

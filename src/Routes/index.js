import Home from '~/Pages/HomePage';
import Following from '~/Pages/FollowingPage';
import Profile from '~/Pages/ProfilePage';
import Upload from '~/Pages/UploadFilePage';
import { HeaderOnly } from '~/components/Layout';

export const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

export const PrivateRoutes = [];

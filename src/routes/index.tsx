import { createBrowserRouter} from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Encrypt from '../pages/Encrypt';
import Decrypt from '../pages/Decrypt';
import Layout from '../layout';
import SkeletonCard from '../components/SkeletonCard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
    },
    {
        path: '/encrypt',
        element: <Encrypt/>
    },
    {
        path: '/decrypt',
        element: <Decrypt/>
    },
    {
        path: '*',
        element: <NotFound />
    },
]);

export default router;
import { createBrowserRouter} from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Encrypt from '../pages/Encrypt';
import Decrypt from '../pages/Decrypt';
import Layout from '../layout';
import SkeletonCard from '../components/SkeletonCard';
import Output from '../pages/Encrypt_Output';
import Decrypt_Output from '../pages/Decrypt_Output';
import Encrypt_Output from '../pages/Encrypt_Output';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
    },
    {
        path: '/encrypt',
        element: <Encrypt/>,
    },
    {
        path: '/encrypt/output',
        element: <Encrypt_Output/>
    },
    {
        path: '/decrypt',
        element: <Decrypt/>,
    },
    {
        path: '/decrypt/output',
        element: <Decrypt_Output/>
    },
    {
        path: "/output",
        element: <Output/> 
    },
    {
        path: '*',
        element: <NotFound />
    },
]);

export default router;
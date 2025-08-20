import type { RouteObject } from 'react-router-dom';
import { PATH } from '@shared/constants/path';
import Layout from '@shared/components/layout/Layout';

import Header from '@/common/components/header/Header';
import Home from '@/pages/home/page/Home';

export const MainRoutes: RouteObject[] = [
  {
    element: <Layout header={<Header />} />,
    children: [{ path: PATH.ROOT, element: <Home /> }],
  },
];

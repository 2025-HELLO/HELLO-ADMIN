import type { RouteObject } from 'react-router-dom';
import { PATH } from '@shared/constants/path';
import Layout from '@shared/components/layout/Layout';

import Header from '@/common/components/header/Header';
import PageHeader from '@/common/components/header/PageHeader';
import Home from '@/pages/home/page/Home';
import VoiceCollector from '@/pages/data/voice/page/VoiceCollector';
import WeeklyReportList from '@/pages/weekly-report/page/WeeklyReportList';
import WeeklyReportDetail from '@/pages/weekly-report/page/WeeklyReportDetail';

export const MainRoutes: RouteObject[] = [
  {
    element: <Layout header={<Header />} />,
    children: [{ path: PATH.ROOT, element: <Home /> }],
  },
  {
    element: <Layout header={<PageHeader title="챗봇 데이터 수집" />} />,
    children: [
      {
        path: PATH.VOICE_DATA,
        element: <VoiceCollector />,
      },
    ],
  },
  {
    element: <Layout header={<PageHeader title="주간 보고서" />} />,
    children: [
      {
        path: PATH.WEEKLY_REPORTS,
        element: <WeeklyReportList />,
      },
      {
        path: PATH.WEEKLY_REPORT_DETAIL(':id'),
        element: <WeeklyReportDetail />,
      },
    ],
  },
];

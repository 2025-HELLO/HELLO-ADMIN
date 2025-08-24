import type { RouteObject } from 'react-router-dom';
import { PATH } from '@shared/constants/path';
import Layout from '@shared/components/layout/Layout';

import Header from '@/common/components/header/Header';
import PageHeader from '@/common/components/header/PageHeader';
import Home from '@/pages/home/page/Home';
import VoiceCollector from '@/pages/data/voice/page/VoiceCollector';
import ChatCollector from '@/pages/data/chat/page/ChatCollector';

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
      {
        path: PATH.CHAT_DATA, // ⬅️ PATH에 CHAT_DATA 추가해놔야 함
        element: <ChatCollector />,
      },
    ],
  },
];

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { OverlayProvider } from 'overlay-kit';

import { router } from './shared/routes/router';
import { queryClient } from './common/utils/queryClient';

import * as styles from '@/shared/styles/global.css.ts';

function App() {
  return (
    <div className={styles.rootContainer}>
      <OverlayProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </OverlayProvider>
    </div>
  );
}

export default App;

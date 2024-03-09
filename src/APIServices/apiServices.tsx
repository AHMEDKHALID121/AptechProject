import * as React from 'react';

// import NetInfo from '@react-native-community/netinfo';
import {
  focusManager,
  onlineManager,
  Query,
  QueryClient,
} from '@tanstack/react-query';
import {AppState, AppStateStatus, Platform} from 'react-native';
import {CACHE_TIME, PAGE_SIZE, STALE_TIME} from '../constants/api';
import {
  PersistedClient,
  Persister,
  PersistQueryClientProvider,
} from '@tanstack/react-query-persist-client';
import { STORAGE_KEYS } from '../constants/queryKeys';
import { getItem , removeItem, setItem} from '../Services/storageServices';
import { queryClient } from '../constants/common';
// import {STORAGE_KEYS} from '@Constants/queryKeys';

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

// export const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: STALE_TIME,
//       cacheTime: CACHE_TIME,
//       getNextPageParam: (lastPage: any) => {
//         return lastPage?.meta?.hasNextPage;
//       },
//       onError: e => {
//         console.log('api error ', e?.message.validationErrors);
//       },
//     },
//     mutations: {
//       onError: e => {
//         console.log('api mutation error ', e?.message.validationErrors);
//       },
//     },
//   },
// });

export default function ApiClientProvider(props: React.PropsWithChildren) {
  const {children} = props;

  const createpersister = React.useCallback((key: string = 'reactQuery') => {
    return {
      //  restoreClient: () => getItem(key),
      //  removeClient: () => removeItem(key),
      //  persistClient: (client: PersistedClient) => setItem(key, client),
      // restoreClient: () => console.log(key , "11111"),
      // removeClient: () => console.log(key , "222222"),
      // persistClient: (client: PersistedClient) => console.log(key, client, "33333333"),
    } as Persister;
  }, []);

  React.useEffect(() => {
    onlineManager.setEventListener(setOnline => {
        console.log("asd")
    //   return NetInfo.addEventListener(state => {
    //     setOnline(Boolean(state.isInternetReachable));
    //   });
    });

    const appStateListener = AppState.addEventListener(
      'change',
      onAppStateChange,
    );

    return () => appStateListener.remove();
  }, []);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      // persistOptions={{
      //   persister: createpersister(),
      //   dehydrateOptions: {
      //     shouldDehydrateQuery: (query: Query) => {
      //       return (
      //         query.state.status === 'success' &&
      //         query.queryKey.includes(STORAGE_KEYS.GET_USER)
      //       );
      //     },
      //   },
      // }}
      >
      {children}
    </PersistQueryClientProvider>
  );
}

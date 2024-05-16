import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import NotFound from '../pages/NotFound';
import { PageRootLayout } from '../pages/PageRootLayout';
import { lazyLoadedComponents } from './lazyRoutes';

const { Home, SearchMovies, Authorisation, MovieInformation } =
  lazyLoadedComponents;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageRootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/search',
        element: (
          <Suspense fallback={<Loader />}>
            <SearchMovies />
          </Suspense>
        ),
      },
      {
        path: '/signin',
        element: (
          <Suspense fallback={<Loader />}>
            <Authorisation />
          </Suspense>
        ),
      },
      {
        path: '/movie/:id',
        element: (
          <Suspense fallback={<Loader />}>
            <MovieInformation />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

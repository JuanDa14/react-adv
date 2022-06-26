import { lazy, LazyExoticComponent } from "react";

import { Nolazy } from '../01-lazyload/pages/Nolazy';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/"../01-lazyload/layout/LazyLayout"));

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "LazyLayout - Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: Nolazy,
    name: "No Lazy",
  },
];

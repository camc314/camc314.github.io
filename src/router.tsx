import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import Blog from "../pages/blog";
import BlogSlug from "../pages/blog/[id]";
import Home from "../pages";
import ProjectsPage from "../pages/projects";
import WikiTools from "../pages/projects/wikitools";
import TimeLine from "../pages/timeline";

const rootRoute = createRootRoute({
  component: Outlet,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
});

const wikiToolsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/wikitools",
  component: WikiTools,
});

const timelineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/timeline",
  component: TimeLine,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: Blog,
});

const blogSlugRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$id",
  component: BlogSlug,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  projectsRoute,
  wikiToolsRoute,
  timelineRoute,
  blogRoute,
  blogSlugRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

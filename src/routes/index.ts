import { lazy } from "solid-js"
import { RouteDefinition } from "solid-app-router"

const routes: RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("../components/pages/Home")),
    }
]

export default routes
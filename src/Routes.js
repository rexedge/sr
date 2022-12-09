import Homepage from "./pages/home";

export const ROUTES = {
    //Application Paths
    index: { path: '', component: <Homepage /> },

}

const ROUTER = {};
Object.keys(ROUTES).forEach((key) => {
    ROUTER[key] = `/${ROUTES[key].path}`;
});
ROUTES.link = ROUTER;

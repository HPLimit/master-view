export default {
    home: {
        path: "/",
        exact: true,
        title:"home",
        getComponent: () => import ('./page/home')
    },
    contactUs: {
        path: "/contact-us",
        title:"contact us",
        getComponent: () => import('./page/contact-us')
    }
}
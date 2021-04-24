
const roleRoutes = {
    "admin": [
        {name: "product"},
        {name: "productAdd"},
        {name: "productList"},
        {name: "category"},
    ],
    "coustomer": [
        {name: "product"},
        {name: "productAdd"},
        {name: "productList"},
    ]
}



export default function getRoutes(role, routes) {
    const allowsRoutes = roleRoutes[role].map(route => route.name);
    const resultRoutes = routes.filter(r => {
        const obj = r;
        if(allowsRoutes.indexOf(r.name) !== -1) {
            const {children} = obj;
            obj.children = children.filter(c => allowsRoutes.indexOf(c.name) !== -1);
            return true;
        }
        return false;
    })
    return resultRoutes;
}
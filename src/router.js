import { createWebHistory, createRouter } from "vue-router";
import AppHome from "./views/AppHome.vue";
import AppProjects from "./views/AppProjects.vue"
import AppAbout from "./views/AppAbout.vue";
import AppContacts from "./views/AppContacts.vue";
import SingleProject from "./views/SingleProject.vue";
import NotFound from "./views/NotFound.vue";



const router = createRouter({

    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: AppHome },
        { path: '/projects', name: 'projects', component: AppProjects },
        { path: '/projects/:id', name: 'project', component: SingleProject },
        { path: '/about', name: 'about', component: AppAbout },
        { path: '/contacts', name: 'contacts', component: AppContacts },
        { path: '/:patchMatch(.*)*', name: 'notFound', component: NotFound },


    ]


})


export default router;
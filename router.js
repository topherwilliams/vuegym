import { createRouter, createWebHistory } from 'vue-router';

import MyDashboard from './components/pages/MyDashboard.vue';
import MyClassSchedule from './components/pages/MyClassSchedule.vue';
import GymClassCalender from './components/pages/GymClassCalender.vue';
import GymClassSearch from './components/pages/GymClassSearch.vue';
import MyWorkouts from './components/pages/MyWorkouts.vue';
import ProgressTracker from './components/pages/ProgressTracker.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/dashboard' },
        { path: '/dashboard', component: MyDashboard },
        { path: '/myclassschedule', component: MyClassSchedule },
        { path: '/classcalender', component: GymClassCalender },
        { path: '/classsearch', component: GymClassSearch },
        { path: '/myworkouts', component: MyWorkouts },
        { path: '/myworkouts/:id', component: MyWorkouts, props: true },
        { path: '/progresstracker', component: ProgressTracker}
        // Create new workout - should it create one and then redirect to it?
    ],
});

export default router;
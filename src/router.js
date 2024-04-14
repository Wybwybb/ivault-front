import { createRouter, createWebHistory } from "vue-router";
import store from "./store/store";
import { IS_USER_AUTHENTICATE_GETTER } from "./store/storeconstants";

const Login = () => import("./pages/LoginPage.vue");
const Signup = () => import("./pages/Signup.vue");
const Home = () => import("./pages/Home.vue");
const LandingPage = () => import("./pages/LandingPage.vue");
const AboutUs = () => import("./pages/AboutUs.vue");
const Home1 = () => import("./pages/Home1.vue");
const OTP = () => import("./pages/OTP.vue");
const Profile = () => import("./pages/Profile.vue");
const Subscription= () => import("./pages/Subscription.vue");
const Payments= () => import("./pages/Payment.vue");

const routes = [
  { path: "/login", component: Login, meta: { auth: false } },
  { path: "/signup", component: Signup, meta: { auth: false } },
  { path: "/landingpage", component: LandingPage, meta: { auth: true } },
  { path: "/about", component: AboutUs, meta: { auth: false } },
  { path: "/home1", component: Home1, meta: { auth: false } },
  { path: "/home", component: Home, meta: { auth: false } },
  { path: "/otp", component: OTP, meta: { auth: false } },
  { path: "/profile", component: Profile, meta: { auth: false } },
  { path: "/subscription", component: Subscription, meta: { auth: false } },
  { path: "/payments", component: Payments, meta: { auth: false } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    "auth" in to.meta &&
    to.meta.auth &&
    !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
  ) {
    next("/login");
  } else if (
    "auth" in to.meta &&
    !to.meta.auth &&
    store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
  ) {
    next("/landingpage");
  } else {
    next();
  }
});

export default router;

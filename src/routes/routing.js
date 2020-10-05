import Index from "views/Index.js"
import NucleoIcons from "views/NucleoIcons.js"
import LandingPage from "views/examples/LandingPage.js"
import ProfilePage from "views/examples/ProfilePage.js"
import RegisterPage from "views/examples/RegisterPage.js"
import ExampleSections from "components/examples/ExampleSections"
import Portfolio from "components/portfolio/Portfolio"
import Blog from "components/blog/BlogContainer"
import AboutMe from "components/about/AboutMe"

const themeRoutes = [
  { path: "/", component: Index },
  { path: "/nucleo-icons", component: NucleoIcons },
  { path: "/landing-page", component: LandingPage },
  { path: "/register-page", component: RegisterPage },
  { path: "/profile-page", component: ProfilePage },
  { path: "/examplek", component: ExampleSections },
  { path: "/portfolio", component: Portfolio },
  { path: "/blog", component: Blog },
  { path: "/aboutme", component: AboutMe },
]

export default themeRoutes

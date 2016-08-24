import App from './components/App.jsx'
import IndexPage from './components/IndexPage.jsx'
import AboutPage from './components/AboutPage.jsx'

export default {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/about',
      component: AboutPage
    }
  ]
}

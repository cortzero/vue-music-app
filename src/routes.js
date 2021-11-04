import Search from '@/components/Search'
import About from '@/components/About'
import TrackDetail from '@/components/TrackDetail'

/**
 * Define todas las rutas: cada pagina, cada sección, etc
 * Cada una de ellas va a estar asociada a un componente
 * Path es lo que viene después del dominio: (www.ejemplo.com/images). /images es un path
 */
const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/about', component: About, name: 'about' },
  { path: '/track/:id', component: TrackDetail, name: 'track' } // Ruta parametrizada. Se usa :parametro
];

export default routes;
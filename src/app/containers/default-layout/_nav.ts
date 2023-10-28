import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
 
  {
    title: true,
    name: 'Usuarios'// titulo principal
  },
  {
    name: 'Usuarios', //nombre del subtitulo
    url: '/usuarios', // ruta al archivo
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Compras',
    title: true
  },
  {
    name: 'Categorias',
    url: '/base',
    iconComponent: { name: 'cil-list' },
  },
  {
    name: 'Productos',
    url: '/buttons',
    iconComponent: { name: 'cil-tags' },
  },
  {
    name: 'Ventas',
    title: true
  },
  {
    name: 'Servicios',
    url: '/base',
    iconComponent: { name: 'cil-settings' },
  },
  {
    name: 'Clientes',
    url: '/buttons',
    iconComponent: { name: 'cil-people' },
  },
  {
    name: 'Ventas',
    url: '/buttons',
    iconComponent: { name: 'cil-dollar' },
  },
  {
    name: 'Abonos',
    url: '/buttons',
    iconComponent: { name: 'cil-credit-card' },
  },
 
];

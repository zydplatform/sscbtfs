import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: 'System User Management'
  },
  {
    name: 'System Users ',
    // url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Add System User',
    // url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'System Settings',
    title: true
  },
  {
    name: 'Border Points',
    // url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Bunagana',
        // url: '/base/accordion'
      },
      {
        name: 'Mpondwe',
        // url: '/base/breadcrumbs'
      },
      {
        name: 'Katuna',
        // url: '/base/cards'
      },
      {
        name: 'Malaba',
        // url: '/base/carousel'
      },
      // {
      //   name: 'Collapse',
      //   url: '/base/collapse'
      // },
      // {
      //   name: 'List Group',
      //   url: '/base/list-group'
      // },
      // {
      //   name: 'Navs & Tabs',
      //   url: '/base/navs'
      // },
      // {
      //   name: 'Pagination',
      //   url: '/base/pagination'
      // },
      // {
      //   name: 'Placeholder',
      //   url: '/base/placeholder'
      // },
      // {
      //   name: 'Popovers',
      //   url: '/base/popovers'
      // },
      // {
      //   name: 'Progress',
      //   url: '/base/progress'
      // },
      // {
      //   name: 'Spinners',
      //   url: '/base/spinners'
      // },
      // {
      //   name: 'Tables',
      //   url: '/base/tables'
      // },
      // {
      //   name: 'Tabs',
      //   url: '/base/tabs'
      // },
      // {
      //   name: 'Tooltips',
      //   url: '/base/tooltips'
      // }
    ]
  },
  {
    name: 'Agencies',
    // url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Immigration',
        // url: '/buttons/buttons'
      },
      {
        name: 'URA',
        // url: '/buttons/button-groups'
      },
      {
        name: 'Ministry of Trade',
        // url: '/buttons/dropdowns'
      },
    ]
  },
  {
    name: 'Goods',
    // url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Trader & Goods',
        // url: '/forms/form-control'
      },
      {
        name: 'GoodsRegistered',
        // url: '/forms/select'
      },
      {
        name: 'GoodsDeclared',
        // url: '/forms/checks-radios'
      },
      {
        name: 'GoodsNotDeclared',
        // url: '/forms/range'
      },
      // {
      //   name: 'Input Group',
      //   url: '/forms/input-group'
      // },
      // {
      //   name: 'Floating Labels',
      //   url: '/forms/floating-labels'
      // },
      // {
      //   name: 'Layout',
      //   url: '/forms/layout'
      // },
      // {
      //   name: 'Validation',
      //   url: '/forms/validation'
      // }
    ]
  },
  {
    name: 'BorderStatisticalData',
    // url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'BorderTransactions',
    iconComponent: { name: 'cil-star' },
    // url: '/icons',
    children: [
      {
        name: 'Exports',
        // url: '/icons/coreui-icons',
        // badge: {
        //   color: 'success'
          
        // }
      },
      {
        name: 'Imports',
        // url: '/icons/flags'
      },
      {
        name: 'CustomsClearance',
        // url: '/icons/brands'
      }
    ]
  },
  {
    name: 'Traders',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'All Traders',
        // url: '/notifications/alerts'
      },
      {
        name: 'TraderDeclarations',
        // url: '/notifications/alerts'
      },
      {
        name: 'TraderFacilitation',
        // url: '/notifications/badges'
      },
      // {
      //   name: '',
      //   url: '/notifications/modal'
      // },
      // {
      //   name: 'Toast',
      //   url: '/notifications/toasts'
      // }
    ]
  },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
];

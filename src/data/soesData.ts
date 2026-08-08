import { DeliveryOutlet, FlavorOption, MenuCategory, OrderCategory, ProductItem, StoreLocation } from '../types';

export const LOGO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN1SVt5zEQif6k454NPyJ_ESMUA679Dq5-0BYqtn-Hzep3Zl8XNumzA5BED4XXTlY4YZeeGboUG1h0JmQU90Kl8T-SYEGxYGVWRJEUblIesfSMaQ0PY1DzKviRsdVIYFRSM3EouU4u1fWpeRNt8DQf5VSzUX3_kfa7UUl9sVkGR3wxKI24jUz-BUA2aZQfup3_ifNqB9KHT_Ivxx9IJA7m8v2ThF0HDVa622iv_nNQY8erHQ6b-buKnxGF2R4QCeYxi8E';

export const HERO_IMAGE = '/img/header_08_08.png';

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'soes-reguler',
    label: 'Soes Reguler',
    image: '/img/1.jpeg',
    alt: 'Soes Surgawi price list — Soes Reguler, Mini, and Super Mini'
  },
  {
    id: 'soes-kering',
    label: 'Soes Kering',
    image: '/img/2.jpeg',
    alt: 'Soes Surgawi price list — Soes Kering, Stick, and Dessert Box'
  },
  {
    id: 'soes-menara',
    label: 'Soes Menara',
    image: '/img/3.jpeg',
    alt: 'Soes Surgawi price list — Soes Menara towers'
  },
  {
    id: 'catering',
    label: 'Catering',
    image: '/img/4.jpeg',
    alt: 'Soes Surgawi price list — Catering menu and bulk pricing'
  }
];

export const ORDER_CATEGORIES: OrderCategory[] = [
  { id: 'soes-reguler', label: 'Soes Reguler' },
  { id: 'soes-kering', label: 'Soes Kering' },
  { id: 'soes-menara', label: 'Soes Menara' },
  { id: 'catering', label: 'Catering' },
  { id: 'custom', label: 'Custom' }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'classic-regular',
    name: 'Classic Regular',
    sizeTag: 'Regular',
    badge: 'Regular',
    description: 'The traditional indulgence, generously filled for a truly satisfying bite.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9qUPwpwuiiDJikORoZCEymHql67TD2YUNnder8EZQ8iBVVem2zJDcOrO3eUYAW5J-_7wJBPi74-E5zte2DXdKr69NfW7DwD0-osgi8_NCOT8QpHfHYUwHXp7iYPRF4yXFWgp3xqPmHuO5KJOxKoQAM9lcSfxWMHbwlijOECaXq-dMg-R5mGcDVUba7cRTcxMRpKb1BydM_mWJ6Ps2JwMGq5JqxlaOxxJ-myWKzH5MaT7WFr5Jz_1MTg',
    piecesPerBox: 6,
    basePriceIdr: 75000,
    recommendedFor: 'Personal indulgence & intimate dessert platters',
    popularFlavors: ['Vanilla Custard', 'Belgian Chocolate', 'Durian Supreme']
  },
  {
    id: 'perfect-mini',
    name: 'Perfect Mini',
    sizeTag: 'Mini',
    badge: 'Mini',
    description: 'Bite-sized perfection. Ideal for sharing or a light, elegant afternoon tea treat.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUKoO8ekjV-MXtWb7ZyyScos0sPcDErFyxKbAKzIm25_7TtIIDwdDZr39tPlpfLD6GzmGwMmnY5kKA6NKWRJ77e1s3Ef9WAL7mBOuBw28pU9uOMGnYkCnA_JiI7-yqVMDfvjcGZJmqxi1JB1u7GvGJs3xCi_23CXXefY4N3Dy6aN8VPYSdQakfp34PE-_t3Bhfw7srF4YZQCHS9vvG75ruj0I8GMfkR7GhU5QmS_5WZ2NvTV16VAznfw',
    piecesPerBox: 12,
    basePriceIdr: 95000,
    recommendedFor: 'Family gatherings, office breaks & tea parties',
    popularFlavors: ['Assorted Signature Box', 'Uji Matcha', 'Salted Caramel']
  },
  {
    id: 'super-mini',
    name: 'Super Mini',
    sizeTag: 'Super Mini',
    badge: 'Super Mini',
    description: 'Delicate, poppable, and irresistibly tiny. Dangerously easy to eat by the handful.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8_BGmtxgMBcltCc7TdYVbDQDy4Rxu_tgzLJxaHIjOCJlJiqQ7YO0q-OYj4Nfry9_cPpGN1L5bos6P3wL3S1fun94xkvXR31897leCT_QFEtGPTZpigV2fHLCGXSpvTJ7Ox3bpd0MY0ddYTOO-hyIWTu1Xes2iHPSQgPkG-7GlNW5QdGTNqqqgVKmDqfoJr9U0MBWgHjGK8OIGuRynhq8P9FhA0d4sJ236Vj5oNgSEUSau0SsARYt4pg',
    piecesPerBox: 24,
    basePriceIdr: 110000,
    recommendedFor: 'Celebration hampers, party snack bowls & gifts',
    popularFlavors: ['Vanilla Snow Dust', 'Classic Mix', 'Lotus Biscoff']
  }
];

export const FLAVORS: FlavorOption[] = [
  {
    id: 'vanilla-custard',
    name: 'Vanilla Custard',
    color: '#fed65b',
    description: 'Real Madagascar vanilla bean custard cream inside a light crispy choux crust.',
    sweetness: 3,
    richness: 5,
    isHalal: true,
    isBestseller: true
  },
  {
    id: 'belgian-chocolate',
    name: 'Belgian Dark Chocolate',
    color: '#644d36',
    description: 'Rich 70% dark chocolate ganache cream with a silky, velvety mouthfeel.',
    sweetness: 2,
    richness: 5,
    isHalal: true,
    isBestseller: true
  },
  {
    id: 'uji-matcha',
    name: 'Uji Matcha Cream',
    color: '#84a98c',
    description: 'Premium ceremonial grade Japanese green tea cream with delicate earthy undertones.',
    sweetness: 2,
    richness: 4,
    isHalal: true
  },
  {
    id: 'durian-supreme',
    name: 'Montong Durian Delight',
    color: '#f4a261',
    description: 'Pure authentic Montong durian flesh whipped with fresh milk cream. Unapologetically rich.',
    sweetness: 4,
    richness: 5,
    isHalal: true,
    isBestseller: true
  },
  {
    id: 'salted-caramel',
    name: 'Salted Butter Caramel',
    color: '#e76f51',
    description: 'House-made slow-cooked caramel infused with French sea salt.',
    sweetness: 4,
    richness: 4,
    isHalal: true
  },
  {
    id: 'lotus-biscoff',
    name: 'Lotus Biscoff Crunch',
    color: '#b07d62',
    description: 'Spiced caramel biscuit cream topped with crunchy Biscoff crumble.',
    sweetness: 4,
    richness: 4,
    isHalal: true
  }
];

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'bxc',
    name: 'Soes Surgawi BxC',
    address:
      'Bintaro Jaya Cbd, Bintaro Jaya Xchange Mall, Lt B1, Jl. Sektor VII No.2 Blk O, Pd. Jaya, Kec. Pd. Aren',
    city: 'Kota Tangerang Selatan, Banten 15227',
    phone: '+62 878-7865-1224',
    whatsappNumber: '6287878651224',
    operatingHours: 'Daily: 10:00 - 09:00',
    mapsUrl:
      'https://maps.google.com/?q=Bintaro+Jaya+Xchange+Mall+Lt+B1+Jl.+Sektor+VII+No.2+Blk+O+Pd.+Jaya+Kec.+Pd.+Aren+Kota+Tangerang+Selatan+Banten+15227',
    isMainBranch: true
  },
  {
    id: 'cipete',
    name: 'Soes Surgawi Cipete',
    address: 'Jl. Cipete Raya No.18, RT.8/RW.4, Cipete Sel., Kec. Cilandak',
    city: 'Jakarta, Daerah Khusus Ibukota Jakarta 12410',
    phone: '+62 878-7865-1224',
    whatsappNumber: '6287878651224',
    operatingHours: 'Daily: 10:00 - 09:00',
    mapsUrl:
      'https://maps.google.com/?q=Jl.+Cipete+Raya+No.18+Cipete+Sel.+Kec.+Cilandak+Jakarta+12410'
  },
  {
    id: 'tebet',
    name: 'Soes Surgawi Tebet',
    address: 'Jl. Tebet Raya No.26d, RT.2/RW.2, Tebet Bar., Kec. Tebet',
    city: 'Jakarta, Daerah Khusus Ibukota Jakarta 12810',
    phone: '+62 878-7865-1224',
    whatsappNumber: '6287878651224',
    operatingHours: 'Daily: 10:00 - 09:00',
    mapsUrl:
      'https://maps.google.com/?q=Jl.+Tebet+Raya+No.26d+Tebet+Bar.+Kec.+Tebet+Jakarta+12810'
  },
  {
    id: 'kebayoran-arcade',
    name: 'Soes Surgawi Kebayoran Arcade',
    address:
      'Ruko Kebayoran Arcade 1, Blok C3 No. 37, Bintaro Sektor 7, Pd. Jaya, Kec. Pd. Aren',
    city: 'Kota Tangerang Selatan, Banten 15224',
    phone: '+62 878-7865-1224',
    whatsappNumber: '6287878651224',
    operatingHours: 'Daily: 10:00 - 09:00',
    mapsUrl: 'https://maps.app.goo.gl/ijRtC8vpCtny6wuq7'
  }
];

export const DELIVERY_OUTLETS: DeliveryOutlet[] = [
  {
    id: 'bintaro-arcade',
    name: 'Bintaro Arcade',
    links: [
      {
        title: 'Gofood Bintaro Arcade',
        url: 'https://gofood.link/a/yM8ZYLU',
        platform: 'gofood'
      },
      {
        title: 'Grabfood Bintaro Arcade',
        url: 'https://food.grab.com/id/en/restaurant/soes-surgawi-pondok-jaya-delivery/6-CYXAGN4CBGK1G2',
        platform: 'grabfood'
      },
      {
        title: 'Shopeefood Bintaro Arcade',
        url: 'https://shopee.co.id/universal-link/now-food/shop/1286725?deep_and_deferred=1&shareChannel=whatsapp',
        platform: 'shopeefood'
      }
    ]
  },
  {
    id: 'bxc-mall',
    name: 'BXC Mall',
    links: [
      {
        title: 'Gofood BXC Mall',
        url: 'https://gofood.link/a/DvmJpfL',
        platform: 'gofood'
      },
      {
        title: 'Grabfood BXC Mall',
        url: 'https://r.grab.com/g/6-20250927_125753_c8cdb0f7cee84ce9b8efe079ca6b5cd2_MEXMPS-6-C3K3UAAFFF23TN',
        platform: 'grabfood'
      }
    ]
  },
  {
    id: 'cipete',
    name: 'Cipete',
    links: [
      {
        title: 'Gofood Cipete',
        url: 'https://gofood.link/a/JktaDp7',
        platform: 'gofood'
      },
      {
        title: 'Grabfood Cipete',
        url: 'https://r.grab.com/g/6-20250927_125417_c8cdb0f7cee84ce9b8efe079ca6b5cd2_MEXMPS-6-C4MEVYEFG3TERE',
        platform: 'grabfood'
      }
    ]
  },
  {
    id: 'tebet',
    name: 'Tebet',
    links: [
      {
        title: 'Gofood Tebet',
        url: 'https://gofood.link/a/NskQnio',
        platform: 'gofood'
      },
      {
        title: 'Grabfood Tebet',
        url: 'https://r.grab.com/g/6-20250927_125357_c8cdb0f7cee84ce9b8efe079ca6b5cd2_MEXMPS-6-C62JVN23NATVUA',
        platform: 'grabfood'
      }
    ]
  },
  {
    id: 'bekasi',
    name: 'Bekasi',
    links: [
      {
        title: 'Gofood Bekasi',
        url: 'https://gofood.link/a/ReC8uby',
        platform: 'gofood'
      },
      {
        title: 'Grabfood Bekasi',
        url: 'https://r.grab.com/g/6-20250927_125332_c8cdb0f7cee84ce9b8efe079ca6b5cd2_MEXMPS-6-C7NCRCM1GLC1LE',
        platform: 'grabfood'
      }
    ]
  }
];

export const WHATSAPP_DEFAULT_NUMBER = '6287878651224';

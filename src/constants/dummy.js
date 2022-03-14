import { SIZES } from './theme';

export const HistoricalData = [
  {
    id: 1,
    date: '16 June',
    time: '23:31',
    vehicleMake: 'BMW',
    vehicleModel: '8 Series',
    vehicleRegistration: 'WWE 789 GP',
    vehicleType: 'Car',
    serviceType: 'Full Wash',
    customerName: 'Kutlono Ramonti',
    price: '210.00',
  },
  {
    id: 2,
    date: '17 June',
    time: '00:31',
    vehicleMake: 'BMW',
    vehicleModel: 'Benz',
    vehicleRegistration: 'WWW 123 GP',
    vehicleType: 'Truck',
    serviceType: 'Half Wash',
    customerName: 'Sello Ramonti',
    price: '220.00'
  },
  {
    id: 3,
    date: '18 June',
    time: '01:31',
    vehicleMake: '',
    vehicleModel: 'VW',
    vehicleRegistration: 'BL 74 MW GP',
    vehicleType: 'Tractor',
    serviceType: 'Valet Wash',
    customerName: 'Rodney Ramonti',
    price: '230.00',
    
  },
  {
    id: 4,
    date: '16 June',
    time: '23:31',
    vehicleMake: 'Hyundi',
    vehicleModel: 'Accent',
    vehicleRegistration: 'HD 17 LC GP',
    vehicleType: 'Ship',
    serviceType: 'Interior Only',
    customerName: 'Derick Ramonti',
    price: '310.00',
    
  },
  {
    id: 5,
    date: '19 June',
    time: '02:31',
    vehicleMake: 'GMC',
    vehicleModel: 'Acadia',
    vehicleRegistration: 'MOS 211 GP',
    vehicleType: 'Ship',
    serviceType: 'Full Wash',
    customerName: 'Michael Buka',
    price: '400.00',
  },
  {
    id: 6,
    date: '19 June',
    time: '02:31',
    vehicleMake: 'VW',
    vehicleModel: 'Polo',
    vehicleRegistration: 'WWE 789 GP',
    vehicleType: 'Car',
    serviceType: 'Full Wash',
    customerName: 'Kutlono Ramonti',
    price: '210.00',
  },
  {
    id: 7,
    date: '19 June',
    time: '02:31',
    vehicleMake: 'VW',
    vehicleModel: 'Vivo',
    vehicleRegistration: 'WWW 235 ZN',
    vehicleType: 'Car',
    serviceType: 'Valet Wash',
    customerName: 'Kutlono Oppenheimer',
    price: '300.00',
  },
  {
    id: 8,
    date: '19 June',
    time: '02:31',
    vehicleMake: 'Audi',
    vehicleModel: 'A7',
    vehicleRegistration: 'WWE 313 ZN',
    vehicleType: 'Tractor',
    serviceType: 'Half Wash',
    customerName: 'Juluis Ramonti',
    price: '270.00',
  },
  {
    id: 9,
    date: '19 July',
    time: '02:09',
    vehicleMake: 'Audi',
    vehicleModel: 'A4',
    vehicleRegistration: 'EWW 456 GP',
    vehicleType: 'Truck',
    serviceType: 'Interior Only',
    customerName: 'Hellen Suzemaan',
    price: '240.00'
  },
  {
    id: 10,
    date: '34 June',
    time: '32:31',
    vehicleMake: 'Benz',
    vehicleModel: 'A-Class',
    vehicleRegistration: 'WWE 789 GP',
    vehicleType: 'Car',
    serviceType: 'Full Wash',
    customerName: 'Wiseman Zondi',
    price: '230.00',
  },
];

export const Events = [
  {
    id: 1,
    type: 'CONCERT',
    title: 'The Weekend',
    startingTime: '2020/12/21 09:10 PM',
    image: require('../../assets/images/event_1.png'),
    description:
      'Non exercitation ullamco reprehenderit incididunt. Officia incididunt id exercitation velit aliqua ut deserunt do non. Aliquip sunt dolor enim occaecat ullamco id consectetur .',
  },
  {
    id: 2,
    type: 'SHOW',
    title: 'Firemasters',
    startingTime: '2020/12/25 08:00 PM',
    image: require('../../assets/images/event_2.png'),
    description:
      'Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et. Und commodo, fermentum, mauris leo eget.',
  },
];

export const Region = {
  latitude: 37.58817,
  longitude: -122.4903973,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005 * (SIZES.width / SIZES.height),
}

export const MapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

const dummyData = { Events, Region, MapStyle, HistoricalData };

export default dummyData;

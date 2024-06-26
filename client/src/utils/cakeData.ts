import Cake1 from '../assets/cake/cake1.jpg';
import Cake2 from '../assets/cake/cake2.jpg';
import Cake3 from '../assets/cake/cake3.jpg';
import Cake4 from '../assets/cake/cake4.jpg';
import Cake5 from '../assets/cake/cake5.jpg';
import Cake6 from '../assets/cake/cake6.jpg';
import Cake7 from '../assets/cake/cake7.jpg';
import Cake8 from '../assets/cake/cake8.jpg';
import Cake9 from '../assets/cake/cake9.jpg';
import Cake10 from '../assets/cake/cake10.jpg';
export interface Cake {
  id: string;
  cakeName: string;
  size: string;
  jamFilling: string;
  price: string;
  img_url: string;
  cakeType: string;
  occasion: string;
  description: string;
  recipe_id: string;
  decor_id: string;
  temp_grill: string;
  time_grill: string;
}
export const cakeData: Cake[] = [
  {
    id: 'BG50015',
    cakeName: 'Bánh kỉ niệm 2 năm',
    size: '10 inches',
    jamFilling: 'Strawberry',
    price: '320.000',
    img_url: Cake1,
    cakeType: 'Sponge cake',
    occasion: 'Christmas',
    description: 'A delicious cake to celebrate 2 years of memories',
    recipe_id: 'RCP50001',
    decor_id: 'DCR50001',
    temp_grill: '180°C',
    time_grill: '30 minutes',
  },
  {
    id: 'BG50016',
    cakeName: 'Bánh kỉ niệm trái tim',
    size: '8 inches',
    jamFilling: 'Raspberry',
    price: '280.000',
    img_url: Cake2,
    cakeType: 'Butter cake',
    occasion: 'Christmas',
    description: 'A heart-shaped cake to celebrate special moments',
    recipe_id: 'RCP50002',
    decor_id: 'DCR50002',
    temp_grill: '160°C',
    time_grill: '25 minutes',
  },
  {
    id: 'BG50017',
    cakeName: 'Bánh chúc mừng kỉ niệm',
    size: '12 inches',
    jamFilling: 'Blueberry',
    price: '350.000',
    img_url: Cake3,
    cakeType: 'Chocolate cake',
    occasion: 'Christmas',
    description: 'A congratulatory cake for memorable occasions',
    recipe_id: 'RCP50003',
    decor_id: 'DCR50003',
    temp_grill: '200°C',
    time_grill: '35 minutes',
  },
  {
    id: 'BG50018',
    cakeName: 'Bánh lịch kỉ niệm',
    size: '6 inches',
    jamFilling: 'Mixed berries',
    price: '400.000',
    img_url: Cake4,
    cakeType: 'Red velvet cake',
    occasion: 'Anniversary',
    description: 'A calendar-shaped cake to mark special dates',
    recipe_id: 'RCP50004',
    decor_id: 'DCR50004',
    temp_grill: '180°C',
    time_grill: '30 minutes',
  },
  {
    id: 'BG50024',
    cakeName: 'Bánh hoa bắp',
    size: '10 inches',
    jamFilling: 'Corn',
    price: '600.000',
    img_url: Cake5,
    cakeType: 'Sponge cake',
    occasion: 'Birthday',
    description: 'A beautiful flower-shaped cake for a corn lover',
    recipe_id: 'RCP50005',
    decor_id: 'DCR50005',
    temp_grill: '200°C',
    time_grill: '35 minutes',
  },
  {
    id: 'BG50023',
    cakeName: 'Bánh hạt bắp',
    size: '8 inches',
    jamFilling: 'Corn',
    price: '600.000',
    img_url: Cake6,
    cakeType: 'Butter cake',
    occasion: 'Birthday',
    description: 'A delicious corn-flavored cake with corn kernels',
    recipe_id: 'RCP50006',
    decor_id: 'DCR50006',
    temp_grill: '180°C',
    time_grill: '30 minutes',
  },
  {
    id: 'BG50021',
    cakeName: 'Bánh bắp trái',
    size: '12 inches',
    jamFilling: 'Corn',
    price: '400.000',
    img_url: Cake7,
    cakeType: 'Chocolate cake',
    occasion: 'Birthday',
    description: 'A fruity cake with corn and mixed fruits',
    recipe_id: 'RCP50007',
    decor_id: 'DCR50007',
    temp_grill: '200°C',
    time_grill: '35 minutes',
  },
  {
    id: 'BG50022',
    cakeName: 'Bánh bắp dâu nho',
    size: '10 inches',
    jamFilling: 'Corn',
    price: '420.000',
    img_url: Cake8,
    cakeType: 'Red velvet cake',
    occasion: 'Custom',
    description: 'A corn-flavored cake with strawberry and grape',
    recipe_id: 'RCP50008',
    decor_id: 'DCR50008',
    temp_grill: '180°C',
    time_grill: '30 minutes',
  },
  {
    id: 'BG50023',
    cakeName: 'Bánh sinh nhật hình chú mèo',
    size: '8 inches',
    jamFilling: 'Vanilla',
    price: '250.000',
    img_url: Cake9,
    cakeType: 'Sponge cake',
    occasion: 'Birthday',
    description: 'A cute cat-shaped birthday cake with vanilla flavor',
    recipe_id: 'RCP50009',
    decor_id: 'DCR50009',
    temp_grill: '160°C',
    time_grill: '25 minutes',
  },
  {
    id: 'BG50024',
    cakeName: 'Bánh hoa hồng',
    size: '10 inches',
    jamFilling: 'Strawberry',
    price: '350.000',
    img_url: Cake10,
    cakeType: 'Butter cake',
    occasion: 'Anniversary',
    description: 'A beautiful rose-shaped cake with strawberry filling',
    recipe_id: 'RCP50010',
    decor_id: 'DCR50010',
    temp_grill: '180°C',
    time_grill: '30 minutes',
  },
];

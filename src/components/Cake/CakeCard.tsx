import { Cake } from '../../utils/cakeData';

const CakeCard = ({ cake }: { cake: Cake }) => {
  const { id, img_url, cakeName, price } = cake;

  return (
    <div className="flex h-[360px] w-[270px] flex-col rounded-xl border border-gray-700 bg-white">
      <div className="flex justify-center">
        <img src={img_url} alt={cakeName} className="mt-3 h-[240px] w-[240px] rounded-xl object-cover" />
      </div>
      <div className="flex-grow p-4">
        <h3 className="mb-2 truncate text-base font-medium">{cakeName}</h3>
        <h4 className="mb-2 text-sm font-normal text-gray-600">{id}</h4>
        <p className="text-base font-bold text-red-500">{price} VNĐ</p>
      </div>
    </div>
  );
};

export default CakeCard;

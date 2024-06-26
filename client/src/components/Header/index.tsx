import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex h-[100px] w-full items-center justify-between bg-black px-4">
      <div className="flex flex-1 items-center">
        <a href="/" className="cursor-pointer">
          <img src={require('../../assets/logo/black-hub-logo.png')} alt="Logo" className="h-16 w-16" />
        </a>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex h-10 w-72 items-center rounded-xl bg-white px-4 py-1">
          <input
            type="text"
            placeholder="Tìm kiếm bánh"
            className="w-full rounded-l-full bg-transparent px-2 py-1 text-black outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
          <FaSearch className="mr-2 h-8 w-8 bg-white p-1 text-black" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end space-x-4">
        <div className="relative">
          <FaShoppingCart className="h-6 w-6 text-white" />
          <span className="absolute right-0 top-0 -mr-2 -mt-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs font-bold leading-none text-red-100">
            2
          </span>
        </div>
        <FaUser className="h-6 w-6 text-white" />
      </div>
    </header>
  );
};

export default Header;

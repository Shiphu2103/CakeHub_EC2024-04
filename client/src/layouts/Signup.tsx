import signupImage from '../assets/cake/signup.jpg';

const SignupForm = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-3/5 overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="w-1/2">
          <img src={signupImage} alt="Signup" className="h-full w-full object-cover" />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="mb-6 text-2xl font-semibold text-black">Nhập thông tin đăng ký</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Tên đăng nhập</label>
              <input
                type="text"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Tên đăng nhập"
              />
            </div>
            <div>
              <label className="block text-gray-700">Mật khẩu</label>
              <input
                type="password"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Mật khẩu"
              />
            </div>
            <div>
              <label className="block text-gray-700">Nhập lại mật khẩu</label>
              <input
                type="password"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-bgr-gradient py-2 font-semibold text-black hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              ĐĂNG KÝ
            </button>
          </form>
          <div className="mt-4 text-center">
            <p>
              Đã có tài khoản?{' '}
              <a href="/login" className="text-primary-500">
                Đăng nhập
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

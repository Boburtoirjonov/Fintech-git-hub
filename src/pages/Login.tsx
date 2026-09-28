function Login() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back
            </h1>
            <p className="text-gray-500 mt-2">
              Accountingizga kiring
            </p>
          </div>
  
          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
  
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
  
            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
  
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </a>
              </div>
  
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
  
            {/* Remember */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
              />
  
              <label
                htmlFor="remember"
                className="text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
  
            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-200"
            >
              Login
            </button>
          </form>
  
          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Accountingiz yo'qmi?{" "}
            <a
              href="#"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    )
  }
  
  export default Login
  
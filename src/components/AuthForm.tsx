import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react"
import onboard_img from "../assets/images/onbaording.png"
import Footer from "./Footer"
import Button from "./ui/Button"

interface AuthFormProps {
  mode: "register" | "login"
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const isRegister = mode === "register"
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  })
  
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="w-full min-h-screen">
      <div className="container max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 mx-auto">
        
        {/* LEFT CONTAINER */}
        <div className="relative h-[300px] md:h-[400px] lg:h-auto">
          <img
            src={onboard_img}
            className="w-full h-full object-cover"
            alt="Nigerian food"
          />

          <div className="absolute hidden lg:flex flex-col justify-center items-center inset-0 hover:bg-[#FF7A18B2] group">
            <div className="max-w-[410px] px-6 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-4xl xl:text-5xl font-bold mb-3">
                Chuks Kitchen
              </h2>
              <p className="text-xl xl:text-2xl font-medium leading-relaxed">
                Your journey to delicious, authentic Nigerian meals starts here.
                Sign up or log in to order your favorites today!
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTAINER */}
        <div className="flex flex-col items-center justify-center py-8 lg:py-10 px-6 md:px-10 lg:px-16 bg-[#F9FAFB] lg:bg-white">
          
          <div className="w-full max-w-[450px]">
            
            <div className="text-center mb-8">
              <h1 className="text-primary font-island text-3xl lg:text-[40px] mb-2">
                Chuks Kitchen
              </h1>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                {isRegister ? "Create Your Account" : "Login Your Account"}
              </h2>
            </div>

            {/* USER FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {isRegister && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isRegister ? "Email" : "Email or phone number"}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@gmail.com"
                    className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {isRegister && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full h-12 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {isRegister && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full h-12 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {!isRegister && (
                <div className="text-right">
                  <a href="/forgot-password" className="text-sm text-[#1C7FF9] hover:underline">
                    Forgot Password?
                  </a>
                </div>
              )}

              <Button variant="primary" size="lg" fullWidth type="submit">
                {isRegister ? "Create Account" : "Continue"}
              </Button>

              {isRegister && (
                <p className="text-xs text-center text-gray-600">
                  By signing up, you agree to our{" "}
                  <a href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </a>
                  and
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </p>
              )}
            </form>

            <div className="flex items-center justify-center my-6">
              <span className="text-sm text-gray-500">Or continue with</span>
              
            </div>

            <div className="space-y-3">
              <button 
                type="button"
                className="w-full h-12 flex items-center justify-center gap-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  Continue with Google
                </span>
              </button>

              <button 
                type="button"
                className="w-full h-12 flex items-center justify-center gap-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  Continue with Apple
                </span>
              </button>
            </div>

            {/* Toggle Login/Register */}
            <p className="text-center text-sm text-gray-600 mt-6">
              {isRegister ? (
                <>
                  Already have an account?{" "}
                  <a href="/login" className="text-primary font-semibold hover:underline">
                    Sign in
                  </a>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <a href="/register" className="text-[#1C7FF9] font-semibold hover:underline">
                    Create an account
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </section>
  )
}

export default AuthForm
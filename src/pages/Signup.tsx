import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formData,
      );
      console.log(response.data);
      navigate("/");
      window.alert("Signup successful");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-[#1A1A1A] px-4">
      <div className="bg-[#111111] p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-gray-400">Join BOOKWISE and never miss an event</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full bg-[#222222] text-white pl-12 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF0033]"
                placeholder="Enter your full name"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#222222] text-white pl-12 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF0033]"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-[#222222] text-white pl-12 pr-12 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF0033]"
                placeholder="Create a password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 rounded border-gray-300 text-[#FF0033] focus:ring-[#FF0033]"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
              I agree to the{" "}
              <Link to="/" className="text-[#FF0033] hover:text-[#cc0029]">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/" className="text-[#FF0033] hover:text-[#cc0029]">
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF0033] text-white py-3 rounded-md hover:bg-[#cc0029] transition-colors font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#FF0033] hover:text-[#cc0029] font-semibold"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

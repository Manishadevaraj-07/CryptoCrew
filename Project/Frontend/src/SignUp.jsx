import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
    role: "farmer", // default role
    otp: "",
  });

  const [errors, setErrors] = useState({});
  const [generatedOtp, setGeneratedOtp] = useState("");

  const roles = ["farmer", "distributor", "retailer"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleRoleChange = (role) => {
    setForm({ ...form, role });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstname.trim()) newErrors.firstname = "Firstname is required.";
    if (!form.lastname.trim()) newErrors.lastname = "Lastname is required.";

    if (!form.email.trim() && !form.phone.trim()) {
      newErrors.email = "Either Email or Phone is required.";
    }

    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (form.phone && !/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!form.password) newErrors.password = "Password is required.";
    else if (form.password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";

    if (form.repeatPassword !== form.password)
      newErrors.repeatPassword = "Passwords do not match.";

    if (!form.otp) newErrors.otp = "OTP is required.";

    return newErrors;
  };

  const handleSendOtp = () => {
    if (!form.phone && !form.email) {
      alert("Please enter phone number or email first.");
      return;
    }

    // Generate a fake 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);

    console.log("Generated OTP (for testing):", otp);
    alert("OTP sent! (Check console for demo)");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (form.otp !== generatedOtp) {
      alert("Invalid OTP. Please try again.");
      return;
    }

    console.log("Signup data:", form);
    alert("Account created successfully!");
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <section className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-green-800 mb-4">
          Create account
        </h1>

        {/* Role Tabs */}
        <div className="flex justify-center gap-6 mb-6">
          {roles.map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => handleRoleChange(role)}
              className={`px-4 py-2 font-semibold border-b-2 ${
                form.role === role
                  ? "border-green-600 text-green-800"
                  : "border-transparent text-gray-500 hover:text-green-700"
              }`}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Firstname */}
          <div>
            <label className="block text-sm font-medium text-green-700">Firstname</label>
            <input
              type="text"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              placeholder="Firstname"
              className={`mt-1 block w-full rounded-lg border ${
                errors.firstname ? "border-red-500" : "border-green-300"
              } px-3 py-2 focus:ring-2 focus:ring-green-400`}
            />
            {errors.firstname && <small className="text-red-500 text-sm">{errors.firstname}</small>}
          </div>

          {/* Lastname */}
          <div>
            <label className="block text-sm font-medium text-green-700">Lastname</label>
            <input
              type="text"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              placeholder="Lastname"
              className={`mt-1 block w-full rounded-lg border ${
                errors.lastname ? "border-red-500" : "border-green-300"
              } px-3 py-2 focus:ring-2 focus:ring-green-400`}
            />
            {errors.lastname && <small className="text-red-500 text-sm">{errors.lastname}</small>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-green-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={`mt-1 block w-full rounded-lg border ${
                errors.email ? "border-red-500" : "border-green-300"
              } px-3 py-2 focus:ring-2 focus:ring-green-400`}
            />
            {errors.email && <small className="text-red-500 text-sm">{errors.email}</small>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-green-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit number"
              className={`mt-1 block w-full rounded-lg border ${
                errors.phone ? "border-red-500" : "border-green-300"
              } px-3 py-2 focus:ring-2 focus:ring-green-400`}
            />
            {errors.phone && <small className="text-red-500 text-sm">{errors.phone}</small>}
          </div>

          {/* OTP */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-green-700">OTP</label>
              <button
                type="button"
                onClick={handleSendOtp}
                className="text-sm text-green-600 hover:underline"
              >
                Send OTP
              </button>
            </div>
            <input
              type="text"
              name="otp"
              value={form.otp}
              onChange={handleChange}
              placeholder="6-digit OTP"
              className={`mt-1 block w-full rounded-lg border ${
                errors.otp ? "border-red-500" : "border-green-300"
              } px-3 py-2 focus:ring-2 focus:ring-green-400`}
            />
            {errors.otp && <small className="text-red-500 text-sm">{errors.otp}</small>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-green-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              className={`mt-1 block w-full rounded-lg border ${
                errors.password ? "border-red-500" : "border-green-300"
              } px-3 py-2 focus:ring-2 focus:ring-green-400`}
            />
            {errors.password && <small className="text-red-500 text-sm">{errors.password}</small>}
          </div>

          {/* Repeat Password */}
          <div>
            <label className="block text-sm font-medium text-green-700">Repeat password</label>
            <input
              type="password"
              name="repeatPassword"
              value={form.repeatPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              className={`mt-1 block w-full rounded-lg border ${
                errors.repeatPassword ? "border-red-500" : "border-green-300"
              } px-3 py-2 focus:ring-2 focus:ring-green-400`}
            />
            {errors.repeatPassword && (
              <small className="text-red-500 text-sm">{errors.repeatPassword}</small>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Create account
          </button>
        </form>

        <p className="text-sm text-center text-green-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 hover:underline">
            Login
          </a>
        </p>
      </section>
    </main>
  );
}

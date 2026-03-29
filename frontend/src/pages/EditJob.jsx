return (
  <div className="min-h-screen bg-slate-100">
    <Navbar />

    <div className="flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-slate-800">Edit Job</h2>
        <p className="text-slate-500 mt-2">
          Update your job application details
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              placeholder="Enter company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Role
            </label>
            <input
              type="text"
              name="role"
              placeholder="Enter role"
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              Update Job
            </button>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
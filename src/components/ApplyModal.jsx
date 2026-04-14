import { X } from 'lucide-react';
import { useState } from 'react';

const ApplyModal = ({ isOpen, onClose, jobTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentLocation: '',
    positionApplyingFor: '',
    yearsOfExperience: '',
    currentCompany: '',
    currentCTC: '',
    expectedCTC: '',
    noticePeriod: '',
    skills: '',
    portfolio: '',
    github: '',
    linkedin: '',
    resume: null,
    coverLetter: null,
    workPreference: '',
    currentStep: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Apply Now</h2>
            <p className="text-brand-primary font-semibold text-sm mt-1">{jobTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
              required
            />
          </div>

          {/* Email & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                required
              />
            </div>
          </div>

          {/* Current Location & Position */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Current Location *
              </label>
              <input
                type="text"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleChange}
                placeholder="City, Country"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Position Applying For *
              </label>
              <input
                type="text"
                name="positionApplyingFor"
                value={formData.positionApplyingFor}
                onChange={handleChange}
                placeholder={jobTitle || "Position"}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                required
              />
            </div>
          </div>

          {/* Experience & Companies */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Years of Experience *
              </label>
              <input
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                placeholder="0"
                min="0"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Current Company
              </label>
              <input
                type="text"
                name="currentCompany"
                value={formData.currentCompany}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
              />
            </div>
          </div>

          {/* CTC */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Current CTC (LPA) *
              </label>
              <input
                type="number"
                name="currentCTC"
                value={formData.currentCTC}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="0.5"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Expected CTC (LPA) *
              </label>
              <input
                type="number"
                name="expectedCTC"
                value={formData.expectedCTC}
                onChange={handleChange}
                placeholder="0"
                min="0"
                step="0.5"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                required
              />
            </div>
          </div>

          {/* Notice Period */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Notice Period *
            </label>
            <select
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
              required
            >
              <option value="">Select Notice Period</option>
              <option value="immediate">Immediate</option>
              <option value="15days">15 Days</option>
              <option value="30days">30 Days</option>
              <option value="60days">60 Days</option>
              <option value="90days">90 Days</option>
            </select>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Skills / Tech Stack *
            </label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g., React, Node.js, Python, AWS (comma separated)"
              rows="3"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary resize-none"
              required
            />
          </div>

          {/* Portfolio Links */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Portfolio URL
              </label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                GitHub Profile
              </label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="https://github.com/username"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/username"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Resume Upload *
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Cover Letter (Optional)
            </label>
            <input
              type="file"
              name="coverLetter"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
            />
            <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX, TXT (Max 2MB)</p>
          </div>

          {/* Work Preference */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Work Preference *
            </label>
            <div className="flex gap-4">
              {['Remote', 'Onsite', 'Hybrid'].map((pref) => (
                <label key={pref} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="workPreference"
                    value={pref.toLowerCase()}
                    checked={formData.workPreference === pref.toLowerCase()}
                    onChange={handleChange}
                    className="w-4 h-4"
                    required
                  />
                  <span className="text-sm text-gray-700">{pref}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-brand-primary text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;

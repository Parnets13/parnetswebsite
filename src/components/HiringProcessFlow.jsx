import { useState } from 'react';
import { X, CheckCircle, Clock, FileText, Users, Briefcase, Gift } from 'lucide-react';
import FadeInUp from './FadeInUp';

const HiringProcessFlow = ({ isOpen, onClose, jobTitle }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentLocation: '',
    positionApplyingFor: jobTitle || '',
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
    workPreference: ''
  });

  const [completedSteps, setCompletedSteps] = useState({
    application: false,
    screening: false,
    hrInterview: false,
    technicalInterview: false,
    task: false,
    finalInterview: false,
    offer: false
  });

  const steps = [
    {
      id: 'application',
      number: 1,
      title: 'Application',
      icon: FileText,
      color: 'bg-brand-primary',
      description: 'Submit your application'
    },
    {
      id: 'screening',
      number: 2,
      title: 'Screening',
      icon: Clock,
      color: 'bg-orange-500',
      description: 'Profile review'
    },
    {
      id: 'hrInterview',
      number: 3,
      title: 'HR Interview',
      icon: Users,
      color: 'bg-purple-500',
      description: 'Initial interview'
    },
    {
      id: 'technicalInterview',
      number: 4,
      title: 'Technical',
      icon: Briefcase,
      color: 'bg-blue-500',
      description: 'Skill evaluation'
    },
    {
      id: 'task',
      number: 5,
      title: 'Task',
      icon: FileText,
      color: 'bg-green-500',
      description: 'Assessment'
    },
    {
      id: 'finalInterview',
      number: 6,
      title: 'Final Round',
      icon: Users,
      color: 'bg-indigo-500',
      description: 'Manager round'
    },
    {
      id: 'offer',
      number: 7,
      title: 'Offer',
      icon: Gift,
      color: 'bg-yellow-500',
      description: 'Offer letter'
    },

  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: e.target.files[0]
    }));
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    setCompletedSteps(prev => ({
      ...prev,
      application: true
    }));
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps(prev => ({
        ...prev,
        [steps[currentStep].id]: true
      }));
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      currentLocation: '',
      positionApplyingFor: jobTitle || '',
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
      workPreference: ''
    });
    setCompletedSteps({
      application: false,
      screening: false,
      hrInterview: false,
      technicalInterview: false,
      task: false,
      finalInterview: false,
      offer: false,
      onboarding: false
    });
  };

  if (!isOpen) return null;

  const currentStepData = steps[currentStep];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 truncate">Hiring Process</h2>
            <p className="text-brand-primary font-semibold text-xs sm:text-sm mt-1 truncate">{jobTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white rounded-full transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="p-3 sm:p-6 border-b border-gray-200 overflow-x-auto">
          <div className="flex items-center justify-between gap-1 sm:gap-2 min-w-min sm:min-w-0">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isCompleted = completedSteps[step.id];
              const isActive = currentStep === index;
              
              return (
                <div key={step.id} className="flex flex-col items-center flex-1 min-w-max sm:min-w-0">
                  <div
                    className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-white mb-1 sm:mb-2 transition-all flex-shrink-0 ${
                      isCompleted || isActive
                        ? step.color
                        : 'bg-gray-300'
                    } ${isActive ? 'ring-4 ring-offset-2 ring-brand-primary' : ''}`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />
                    ) : (
                      <StepIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    )}
                  </div>
                  <p className="text-xs font-semibold text-gray-900 text-center leading-tight">{step.title}</p>
                  {index < steps.length - 1 && (
                    <div className={`h-1 w-full mt-1 sm:mt-2 hidden sm:block ${isCompleted ? 'bg-brand-primary' : 'bg-gray-300'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {currentStep === 0 && (
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Step 1: Application Submission</h3>
              <form onSubmit={handleSubmitApplication} className="space-y-4 sm:space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={applicationData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                    required
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                      required
                    />
                  </div>
                </div>

                {/* Current Location & Position */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Current Location *</label>
                    <input
                      type="text"
                      name="currentLocation"
                      value={applicationData.currentLocation}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Position Applying For *</label>
                    <input
                      type="text"
                      name="positionApplyingFor"
                      value={applicationData.positionApplyingFor}
                      onChange={handleInputChange}
                      placeholder="Position"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                      required
                    />
                  </div>
                </div>

                {/* Experience & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Years of Experience *</label>
                    <input
                      type="number"
                      name="yearsOfExperience"
                      value={applicationData.yearsOfExperience}
                      onChange={handleInputChange}
                      placeholder="0"
                      min="0"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Current Company</label>
                    <input
                      type="text"
                      name="currentCompany"
                      value={applicationData.currentCompany}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                {/* CTC */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Current CTC (LPA) *</label>
                    <input
                      type="number"
                      name="currentCTC"
                      value={applicationData.currentCTC}
                      onChange={handleInputChange}
                      placeholder="0"
                      min="0"
                      step="0.5"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Expected CTC (LPA) *</label>
                    <input
                      type="number"
                      name="expectedCTC"
                      value={applicationData.expectedCTC}
                      onChange={handleInputChange}
                      placeholder="0"
                      min="0"
                      step="0.5"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                      required
                    />
                  </div>
                </div>

                {/* Notice Period */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Notice Period *</label>
                  <select
                    name="noticePeriod"
                    value={applicationData.noticePeriod}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
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
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Skills / Tech Stack *</label>
                  <textarea
                    name="skills"
                    value={applicationData.skills}
                    onChange={handleInputChange}
                    placeholder="e.g., React, Node.js, Python, AWS (comma separated)"
                    rows="3"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary resize-none"
                    required
                  />
                </div>

                {/* Portfolio Links */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Portfolio URL</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={applicationData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://yourportfolio.com"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">GitHub Profile</label>
                    <input
                      type="url"
                      name="github"
                      value={applicationData.github}
                      onChange={handleInputChange}
                      placeholder="https://github.com/username"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={applicationData.linkedin}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Resume Upload *</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Cover Letter (Optional)</label>
                  <input
                    type="file"
                    name="coverLetter"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary"
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX, TXT (Max 2MB)</p>
                </div>

                {/* Work Preference */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">Work Preference *</label>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {['Remote', 'Onsite', 'Hybrid'].map((pref) => (
                      <label key={pref} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="workPreference"
                          value={pref.toLowerCase()}
                          checked={applicationData.workPreference === pref.toLowerCase()}
                          onChange={handleInputChange}
                          className="w-4 h-4"
                          required
                        />
                        <span className="text-xs sm:text-sm text-gray-700">{pref}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-brand-primary text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Step 2: Screening</h3>
              <div className="bg-blue-50 rounded-lg p-4 sm:p-6 mb-6">
                <p className="text-sm sm:text-base text-gray-700 mb-4"><strong>Purpose:</strong> Basic qualification verification</p>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-gray-700">✓ Resume relevance and experience match</p>
                  <p className="text-xs sm:text-sm text-gray-700">✓ Salary expectation alignment</p>
                  <p className="text-xs sm:text-sm text-gray-700">✓ Communication basics</p>
                  <p className="text-xs sm:text-sm text-gray-700">✓ Notice period and availability</p>
                  <p className="text-xs sm:text-sm text-gray-700">✓ Portfolio/GitHub review</p>
                </div>
              </div>
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-3 sm:p-4 mb-6">
                <p className="text-xs sm:text-sm text-blue-900 italic">"Our recruitment team reviews your profile to assess alignment with role requirements."</p>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Step 3: Initial Interview / HR Interview</h3>
              <div className="bg-purple-50 rounded-lg p-4 sm:p-6 mb-6">
                <p className="text-sm sm:text-base text-gray-700 mb-4"><strong>Purpose:</strong> Culture fit, communication, and background assessment</p>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-gray-700">• Candidate introduction and background</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Past experience and achievements</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Project discussion and learnings</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Career goals and aspirations</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Communication skills assessment</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Team fit and collaboration approach</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Availability and joining timeline</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Step 4: Technical Interview</h3>
              <div className="bg-blue-50 rounded-lg p-4 sm:p-6 mb-6">
                <p className="text-sm sm:text-base text-gray-700 mb-4"><strong>Purpose:</strong> Skill evaluation and technical competency</p>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-gray-700">✓ Core fundamentals and concepts</p>
                  <p className="text-xs sm:text-sm text-gray-700">✓ Problem-solving approach</p>
                  <p className="text-xs sm:text-sm text-gray-700">✓ Tech stack knowledge</p>
                  <p className="text-xs sm:text-sm text-gray-700">✓ Live coding / Whiteboard</p>
                  <p className="text-xs sm:text-sm text-gray-700">✓ System design (for senior roles)</p>
                  <p className="text-xs sm:text-sm text-gray-700">✓ Debugging and optimization</p>
                  <p className="text-xs sm:text-sm text-gray-700">✓ Architecture understanding</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Step 5: Task / Assessment</h3>
              <div className="bg-green-50 rounded-lg p-4 sm:p-6 mb-6">
                <p className="text-sm sm:text-base text-gray-700 mb-4"><strong>Purpose:</strong> Real practical ability check</p>
                <div className="mb-4">
                  <p className="font-semibold text-sm sm:text-base text-gray-900 mb-2">Task Types:</p>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-xs sm:text-sm text-gray-700">• Small coding assignment</p>
                    <p className="text-xs sm:text-sm text-gray-700">• API development task</p>
                    <p className="text-xs sm:text-sm text-gray-700">• UI design implementation</p>
                    <p className="text-xs sm:text-sm text-gray-700">• Bug fixing challenge</p>
                    <p className="text-xs sm:text-sm text-gray-700">• Architecture challenge</p>
                    <p className="text-xs sm:text-sm text-gray-700">• Database design task</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base text-gray-900 mb-2">Task Details Include:</p>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-xs sm:text-sm text-gray-700">• Deadline (typically 3-5 days)</p>
                    <p className="text-xs sm:text-sm text-gray-700">• Submission format (GitHub/ZIP)</p>
                    <p className="text-xs sm:text-sm text-gray-700">• Evaluation criteria</p>
                    <p className="text-xs sm:text-sm text-gray-700">• Instructions and requirements</p>
                    <p className="text-xs sm:text-sm text-gray-700">• Expected output specifications</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Step 6: Final Interview / Manager Round</h3>
              <div className="bg-indigo-50 rounded-lg p-4 sm:p-6 mb-6">
                <p className="text-sm sm:text-base text-gray-700 mb-4"><strong>Purpose:</strong> Final fitment and practical discussion</p>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-gray-700">• Deep dive into project work</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Task submission review and discussion</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Team collaboration approach</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Ownership and leadership qualities</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Problem-solving mindset</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Long-term career goals alignment</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Step 7: Offer</h3>
              <div className="bg-yellow-50 rounded-lg p-4 sm:p-6 mb-6">
                <p className="text-sm sm:text-base text-gray-700 mb-4"><strong>Purpose:</strong> Official offer release</p>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-gray-700">• Designation and role</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Salary package and compensation</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Bonus / Incentives</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Joining date</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Work model (Remote/Onsite/Hybrid)</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Reporting manager</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Offer expiry date (typically 7 days)</p>
                  <p className="text-xs sm:text-sm text-gray-700">• Employment terms and conditions</p>
                </div>
              </div>
              <div className="bg-green-100 border border-green-300 rounded-lg p-3 sm:p-4 mb-6">
                <p className="text-xs sm:text-sm text-green-900 font-semibold">🎉 Congratulations! You've completed the hiring process. Welcome to our team!</p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
            <button
              onClick={handlePreviousStep}
              disabled={currentStep === 0}
              className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {currentStep === steps.length - 1 ? (
              <button
                onClick={handleReset}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-brand-primary text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Start Over
              </button>
            ) : (
              <button
                onClick={handleNextStep}
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-brand-primary text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringProcessFlow;

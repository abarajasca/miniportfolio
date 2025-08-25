import { useState } from 'react';
import { validateField } from '../utilities/validations';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  company: string;
  phone: string;
  projectType: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  phone?: string;
  message?: string;
}

function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    company: '',
    phone: '',
    projectType: '',
    timeline: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate required fields
    newErrors.name = validateField('name', formData.name);
    newErrors.email = validateField('email', formData.email);
    newErrors.subject = validateField('subject', formData.subject);
    newErrors.phone = validateField('phone', formData.phone);
    newErrors.message = validateField('message', formData.message);

    // Remove empty error messages
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key as keyof FormErrors]) {
        delete newErrors[key as keyof FormErrors];
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        company: '',
        phone: '',
        projectType: '',
        timeline: '',
        message: ''
      });
      setErrors({});
    }, 1000);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="text-center mb-5">
            <h1 className="display-4 mb-3">Get In Touch</h1>
            <p className="lead text-muted">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="row mb-5">
            <div className="col-md-4 mb-3">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className="bi bi-envelope-fill text-primary fs-2 mb-3"></i>
                  <h5 className="card-title">Email</h5>
                  <p className="card-text">john.doe@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className="bi bi-telephone-fill text-success fs-2 mb-3"></i>
                  <h5 className="card-title">Phone</h5>
                  <p className="card-text">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <i className="bi bi-geo-alt-fill text-info fs-2 mb-3"></i>
                  <h5 className="card-title">Location</h5>
                  <p className="card-text">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="card-title h4 mb-4">Send Me a Message</h2>
              
              {submitMessage && (
                <div className="alert alert-success" role="alert">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="company" className="form-label">Company/Organization</label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name (optional)"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">
                        {errors.phone}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Brief description of your inquiry"
                  />
                  {errors.subject && (
                    <div className="invalid-feedback">
                      {errors.subject}
                    </div>
                  )}
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="projectType" className="form-label">Project Type</label>
                    <select
                      className="form-select"
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select project type</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="website">Business Website</option>
                      <option value="ecommerce">E-commerce Platform</option>
                      <option value="api">API Development</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="timeline" className="form-label">Project Timeline</label>
                    <select
                      className="form-select"
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months-plus">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Please describe your project, goals, and any specific requirements..."
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">
                      {errors.message}
                    </div>
                  )}
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="newsletter" />
                  <label className="form-check-label" htmlFor="newsletter">
                    I'd like to receive updates about your latest projects and tech insights
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-5"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send-fill me-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Contact Methods */}
          <div className="card shadow-sm mt-4">
            <div className="card-body text-center">
              <h3 className="card-title h5 mb-3">Connect on Social Media</h3>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://linkedin.com/in/johndoe" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin me-1"></i> LinkedIn
                </a>
                <a href="https://github.com/johndoe" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github me-1"></i> GitHub
                </a>
                <a href="https://twitter.com/johndoe" className="btn btn-outline-info" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter me-1"></i> Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
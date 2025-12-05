'use client';

import React, { useState } from 'react';
import { LucideIcon, InputField, TextAreaField } from '../ui';
import { supabase } from '@/src/app/lib/supabase';

interface ContactSectionProps {
  handleNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ handleNavLinkClick }) => {
  const [formData, setFormData] = useState({
    contactName: '', 
    phone: '', 
    email: '', 
    businessName: '',
    businessAddress: '', 
    serviceType: '', 
    additionalInfo: ''
  });

  const [submissionMessage, setSubmissionMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (submissionMessage) setSubmissionMessage(null);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFields = ['contactName', 'phone', 'email', 'businessName', 'businessAddress', 'serviceType'];
    const missing = requiredFields.filter(key => !formData[key as keyof typeof formData]);

    if (missing.length > 0) {
      setSubmissionMessage({ type: 'error', text: 'Please fill in all required fields marked with *.' });
      return;
    }

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            contact_name: formData.contactName,
            phone_number: formData.phone,
            email_address: formData.email,
            practice_facility_name: formData.businessName,
            business_address: formData.businessAddress,
            service_type: formData.serviceType,
            additional_information: formData.additionalInfo
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        setSubmissionMessage({ 
          type: 'error', 
          text: 'Failed to submit form. Please try again or contact us directly.' 
        });
        return;
      }

      console.log('Contact Form Submitted Successfully:', data);
      setSubmissionMessage({ 
        type: 'success', 
        text: 'Thank you! Our team will contact you within 24 hours.' 
      });
      
      // Reset form
      setFormData({
        contactName: '', phone: '', email: '', businessName: '',
        businessAddress: '', serviceType: '', additionalInfo: ''
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      setSubmissionMessage({ 
        type: 'error', 
        text: 'An unexpected error occurred. Please try again.' 
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-[#E3EEF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Contact us today to learn more about our radiology reading services and how we can support your practice.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-10 md:mb-12">
          <div className="reveal text-center rounded-xl bg-white border border-gray-200 hover:shadow-lg transition p-6">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 grid place-content-center">
              <LucideIcon className="w-6 h-6 text-[#0074C8]">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </LucideIcon>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm">Call Us</h4>
            <p className="text-sm">
              <a className="hover:underline text-[#0074C8] font-semibold" href="tel:+17149955400">
                (714) 995-5400
              </a>
            </p>
          </div>

          <div className="reveal text-center rounded-xl bg-white border border-gray-200 hover:shadow-lg transition p-6">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 grid place-content-center">
              <LucideIcon className="w-6 h-6 text-[#0074C8]">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </LucideIcon>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm">Email Us</h4>
            <p className="text-sm">
              <a className="hover:underline text-[#0074C8] font-semibold break-all" href="mailto:apireports@gmail.com">
                apireports@gmail.com
              </a>
            </p>
          </div>

          <div className="reveal text-center rounded-xl bg-white border border-gray-200 hover:shadow-lg transition p-6 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 grid place-content-center">
              <LucideIcon className="w-6 h-6 text-[#0074C8]">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </LucideIcon>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm">Visit Us</h4>
            <p className="text-sm text-gray-700">
              6905 Oslo Circle Suite F<br />Buena Park, CA 90621
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto reveal">
          <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 p-6 md:p-8 lg:p-10 shadow-lg bg-white">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Request Our Services</h3>
              <p className="text-sm md:text-base text-gray-600">
                Fill out the form below and our team will contact you within 24 hours.
              </p>
            </div>

            {submissionMessage && (
              <div className={`p-3 md:p-4 rounded-lg text-sm font-semibold ${
                submissionMessage.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submissionMessage.text}
              </div>
            )}

            <form className="space-y-4 md:space-y-5" onSubmit={handleFormSubmit}>
              <InputField 
                label="Contact Name" 
                id="contactName" 
                required 
                placeholder="Dr. John Smith" 
                value={formData.contactName} 
                onChange={handleFormChange}
              />

              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <InputField 
                  label="Phone Number" 
                  id="phone" 
                  type="tel" 
                  required 
                  placeholder="(555) 123-4567" 
                  value={formData.phone} 
                  onChange={handleFormChange}
                />
                <InputField 
                  label="Email Address" 
                  id="email" 
                  type="email" 
                  required 
                  placeholder="doctor@clinic.com" 
                  value={formData.email} 
                  onChange={handleFormChange}
                />
              </div>

              <InputField 
                label="Practice/Facility Name" 
                id="businessName" 
                required 
                placeholder="ABC Medical Center" 
                value={formData.businessName} 
                onChange={handleFormChange}
              />

              <TextAreaField 
                label="Business Address" 
                id="businessAddress" 

                required 
                placeholder="123 Main Street, Suite 100, City, State, ZIP" 
                value={formData.businessAddress} 
                onChange={handleFormChange} 
                rows={2}
              />

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm leading-none font-semibold text-gray-900" htmlFor="serviceType">
                  Type of Service Interested In <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleFormChange}
                    className="h-11 border-gray-300 flex w-full rounded-lg border-2 bg-white px-4 py-2 text-sm transition-all outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 appearance-none pr-10"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="xray">X-Ray Readings</option>
                    <option value="ultrasound">Ultrasound Readings</option>
                    <option value="mri">MRI Readings</option>
                    <option value="ct">CT Scan Readings</option>
                    <option value="mammogram">Mammogram Readings</option>
                    <option value="nuclear">Nuclear Medicine</option>
                    <option value="pet">PET Scans</option>
                    <option value="all">All Modalities</option>
                    <option value="other">Other (Please Specify)</option>
                  </select>
                  <LucideIcon className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <path d="m6 9 6 6 6-6"></path>
                  </LucideIcon>
                </div>
              </div>

              <TextAreaField 
                label="Additional Information" 
                id="additionalInfo" 
                placeholder="Tell us about your imaging volume, preferred turnaround times, or any specific subspecialty requirements..." 
                value={formData.additionalInfo} 
                onChange={handleFormChange} 
                rows={4}
              />

              <button 
                className="h-11 md:h-12 px-5 py-2 w-full cursor-pointer bg-gradient-to-r from-blue-900 to-blue-600 hover:from-[#005A9C] hover:to-[#003F6B] text-white rounded-lg font-semibold transition shadow-md text-sm md:text-base" 
                type="submit"
              >
                Submit Request
              </button>
              
              <p className="text-xs md:text-sm text-gray-500 text-center leading-relaxed">
                By submitting this form, you agree to be contacted by Advanced Professional Imaging Medical Group regarding our radiology services.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

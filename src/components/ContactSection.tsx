import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    companyName: '',
    employees: '',
    refSource: '',
    referralCode: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
            Hire, pay & manage your employees all in one place.
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Full name<span className="text-red-500">*</span></label>
              <Input name="name" placeholder="" value={formData.name} onChange={handleChange} required className="bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Job title<span className="text-red-500">*</span></label>
              <Input name="jobTitle" placeholder="" value={formData.jobTitle} onChange={handleChange} required className="bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Work Email<span className="text-red-500">*</span></label>
              <Input type="email" name="email" placeholder="" value={formData.email} onChange={handleChange} required className="bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Mobile number<span className="text-red-500">*</span></label>
              <Input name="phone" placeholder="" value={formData.phone} onChange={handleChange} required className="bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Company name<span className="text-red-500">*</span></label>
              <Input name="companyName" placeholder="" value={formData.companyName} onChange={handleChange} required className="bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Number of employees<span className="text-red-500">*</span></label>
              <select name="employees" value={formData.employees} onChange={handleChange} required className="bg-gray-100 w-full rounded-md border border-gray-200 py-2 px-3">
                <option value="">Please Select</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201+">201+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">How did you hear about us?<span className="text-red-500">*</span></label>
              <select name="refSource" value={formData.refSource} onChange={handleChange} required className="bg-gray-100 w-full rounded-md border border-gray-200 py-2 px-3">
                <option value="">Please Select</option>
                <option value="Google">Google</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Referral Code</label>
              <Textarea name="referralCode" value={formData.referralCode} onChange={handleChange} className="bg-gray-100" />
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <input type="checkbox" id="agree" className="mr-2" />
            <label htmlFor="agree" className="text-sm text-gray-700">I agree to receive other communications from Fawry Pay Day Team</label>
          </div>
          <p className="text-xs text-gray-500 mt-2">You can unsubscribe from these communications at any time.</p>
          <Button type="submit" className="mt-8 bg-[#ffd300] hover:bg-[#ffd300] text-white font-semibold px-8 py-2 rounded-full">Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

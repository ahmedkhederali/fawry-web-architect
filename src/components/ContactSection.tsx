
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-secondary animate-fade-in">
            CONTACT US
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            If you have any questions, please feel free to get in touch with us via phone, text, email, the form below, or even on social media!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 p-8">
              <h3 className="text-2xl font-bold mb-6 text-secondary">GET IN TOUCH</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">NAME</label>
                    <Input
                      name="name"
                      placeholder="Enter your name*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">PHONE NUMBER</label>
                    <Input
                      name="phone"
                      placeholder="Enter your phone number*"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">EMAIL</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">YOUR MESSAGE</label>
                  <Textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8">
              <h3 className="text-2xl font-bold mb-6 text-secondary">CONTACT INFORMATION</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">PHONE</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold">EMAIL</p>
                    <p className="text-gray-600">info@diracsystems.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">ADDRESS</p>
                    <p className="text-gray-600">123 Tech Street, Digital City, TC 12345</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-lg mb-4">BUSINESS HOURS</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">MONDAY - FRIDAY</p>
                    <p className="text-gray-600">9:00 am - 6:00 pm</p>
                  </div>
                  <div>
                    <p className="font-semibold">SATURDAY</p>
                    <p className="text-gray-600">9:00 am - 4:00 pm</p>
                  </div>
                  <div>
                    <p className="font-semibold">SUNDAY</p>
                    <p className="text-gray-600">10:00 am - 4:00 pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">🗺️ Interactive Map Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

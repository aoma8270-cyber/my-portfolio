import React from 'react';
import { SectionId } from '../types';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-20 bg-gradient-to-t from-gray-100 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 text-dark">Get in Touch</h2>
            <p className="text-gray-600">
              新しいプロジェクトのご相談や、採用に関するお問い合わせは<br />
              以下のフォームまたはメールにてお待ちしております。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-dark">Contact Info</h3>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href="mailto:contact@aomaikegaki.dev" className="text-dark hover:text-accent transition-colors font-medium">
                    contact@aomaikegaki.dev
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-dark font-medium">Tokyo, Japan</p>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-dark focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-dark focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-dark focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all"
                  placeholder="Hello..."
                ></textarea>
              </div>
              <button 
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 rounded-lg hover:shadow-lg hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
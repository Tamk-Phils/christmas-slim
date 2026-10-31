import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ShieldCheck, BookOpen, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CustomerSupportPage: React.FC = () => {
  const { showToast } = useCart();
  const [activeTab, setActiveTab] = useState<'warranty' | 'catalog' | 'faq' | 'contact'>('warranty');
  const [catalogSubmitted, setCatalogSubmitted] = useState(false);
  const [catalogForm, setCatalogForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleCatalogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCatalogSubmitted(true);
    showToast('Your complimentary Balsam Hill Holiday Catalog is on its way! 📖');
  };

  return (
    <div className="customer-support-page" style={{ background: '#faf7f2', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Breadcrumb Strip */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #eee', padding: '0.85rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
          <Link to="/" style={{ color: '#444', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <span style={{ color: '#143d2f', fontWeight: 600 }}>Customer Support &amp; Warranty</span>
        </div>
      </div>

      {/* Hero Header */}
      <div style={{ background: '#0e2a20', color: '#ffffff', padding: '4rem 1rem 3.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <span style={{ color: '#fae19c', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Balsam Hill Customer Care
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', margin: '0.5rem 0 1rem', fontWeight: 600 }}>
            Here to Help Your Holidays Shine
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#e0ece6', lineHeight: 1.6, margin: 0 }}>
            Speak directly with our dedicated holiday consultants or browse warranty coverage, shaping tutorials, and catalog requests.
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1100px', margin: '3rem auto 0', padding: '0 1rem' }}>
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '2px solid #ebd9c0', marginBottom: '3rem', overflowX: 'auto' }}>
          {[
            { id: 'warranty', label: '3-Year Limited Warranty', icon: <ShieldCheck size={17} /> },
            { id: 'catalog', label: 'Request a Free Catalog', icon: <BookOpen size={17} /> },
            { id: 'faq', label: 'Frequently Asked Questions', icon: <ChevronRight size={17} /> },
            { id: 'contact', label: 'Contact Customer Service', icon: <Phone size={17} /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 1.75rem',
                border: 'none',
                background: activeTab === tab.id ? 'var(--color-forest)' : '#ffffff',
                color: activeTab === tab.id ? '#ffffff' : '#444',
                fontWeight: 700,
                fontSize: '0.92rem',
                borderRadius: '6px 6px 0 0',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: activeTab === tab.id ? '0 -2px 8px rgba(0,0,0,0.06)' : 'none'
              }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: 3-Year Limited Warranty */}
        {activeTab === 'warranty' && (
          <div style={{ background: '#ffffff', borderRadius: 8, border: '1px solid #ebd9c0', padding: '3rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <ShieldCheck size={28} color="var(--color-forest)" />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#143d2f', margin: 0 }}>
                Balsam Hill 3-Year Limited Warranty Coverage
              </h2>
            </div>
            <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Every artificial Christmas tree purchased directly from Balsam Hill includes our comprehensive 3-Year Limited Warranty against manufacturer defects.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ background: '#faf7f2', padding: '1.5rem', borderRadius: 8, borderLeft: '4px solid var(--color-forest)' }}>
                <h4 style={{ color: '#143d2f', margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Tree Frame &amp; Foliage</h4>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                  Covers all structural metal trunk components, hinged branch mechanisms, folding tree stands, and True Needle® molded foliage tips.
                </p>
              </div>

              <div style={{ background: '#faf7f2', padding: '1.5rem', borderRadius: 8, borderLeft: '4px solid var(--color-gold)' }}>
                <h4 style={{ color: '#143d2f', margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Factory Pre-Strung Lights</h4>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                  Covers light strings, trunk-embedded Easy Plug® connections, foot pedal power switches, and transformers for three full holiday seasons.
                </p>
              </div>

              <div style={{ background: '#faf7f2', padding: '1.5rem', borderRadius: 8, borderLeft: '4px solid #891b29' }}>
                <h4 style={{ color: '#143d2f', margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Replacement Parts</h4>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                  Extra hinge pins, replacement micro-LED bulbs, fuses, and replacement tree sections shipped promptly from our California facility.
                </p>
              </div>
            </div>

            <div style={{ background: '#f4ede2', padding: '1.5rem', borderRadius: 8, border: '1px solid #ebd9c0' }}>
              <div style={{ fontWeight: 700, color: '#143d2f', marginBottom: '0.35rem' }}>
                Need to submit a warranty claim or request replacement bulbs?
              </div>
              <p style={{ color: '#555', fontSize: '0.9rem', margin: '0 0 1rem' }}>
                Have your Order Number ready and call our toll-free support line at <strong>1-888-55-BALSAM</strong> (1-888-552-2572).
              </p>
              <button
                onClick={() => setActiveTab('contact')}
                style={{ background: 'var(--color-forest)', color: '#fff', border: 'none', padding: '0.65rem 1.4rem', borderRadius: 4, fontWeight: 700, cursor: 'pointer' }}
              >
                Contact Customer Care
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Free Catalog Request */}
        {activeTab === 'catalog' && (
          <div style={{ background: '#ffffff', borderRadius: 8, border: '1px solid #ebd9c0', padding: '3rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <BookOpen size={28} color="var(--color-forest)" />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#143d2f', margin: 0 }}>
                Request Your Complimentary Holiday Catalog
              </h2>
            </div>
            <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Filled with 100+ pages of seasonal decorating inspiration, tree size comparison guides, and designer home photography.
            </p>

            {catalogSubmitted ? (
              <div style={{ background: '#e8f5e9', padding: '2.5rem', borderRadius: 8, textAlign: 'center', border: '1px solid #c8e6c9' }}>
                <CheckCircle2 size={42} color="#2e7d32" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#2e7d32', margin: '0 0 0.5rem' }}>
                  Catalog Request Received!
                </h3>
                <p style={{ color: '#555', margin: '0 0 1.5rem' }}>
                  Your complimentary Balsam Hill Holiday Catalog will arrive in your mailbox within 5 to 7 business days.
                </p>
                <button
                  onClick={() => setCatalogSubmitted(false)}
                  style={{ background: 'var(--color-forest)', color: '#fff', border: 'none', padding: '0.65rem 1.5rem', borderRadius: 4, fontWeight: 700, cursor: 'pointer' }}
                >
                  Request Another Catalog
                </button>
              </div>
            ) : (
              <form onSubmit={handleCatalogSubmit} style={{ maxWidth: '650px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem' }}>First Name</label>
                    <input
                      type="text"
                      required
                      value={catalogForm.firstName}
                      onChange={e => setCatalogForm({ ...catalogForm, firstName: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem' }}>Last Name</label>
                    <input
                      type="text"
                      required
                      value={catalogForm.lastName}
                      onChange={e => setCatalogForm({ ...catalogForm, lastName: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem' }}>Email Address</label>
                  <input
                    type="email"
                    required
                    value={catalogForm.email}
                    onChange={e => setCatalogForm({ ...catalogForm, email: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem' }}>Mailing Address</label>
                  <input
                    type="text"
                    required
                    value={catalogForm.address}
                    onChange={e => setCatalogForm({ ...catalogForm, address: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem', marginBottom: '1.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem' }}>City</label>
                    <input
                      type="text"
                      required
                      value={catalogForm.city}
                      onChange={e => setCatalogForm({ ...catalogForm, city: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem' }}>State</label>
                    <input
                      type="text"
                      required
                      value={catalogForm.state}
                      onChange={e => setCatalogForm({ ...catalogForm, state: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem' }}>Zip Code</label>
                    <input
                      type="text"
                      required
                      value={catalogForm.zip}
                      onChange={e => setCatalogForm({ ...catalogForm, zip: e.target.value })}
                      style={{ width: '100%', padding: '0.65rem', border: '1px solid #ccc', borderRadius: 4 }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{ background: 'var(--color-forest)', color: '#fff', border: 'none', padding: '0.85rem 2rem', borderRadius: 4, fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}
                >
                  Mail My Free Catalog
                </button>
              </form>
            )}
          </div>
        )}

        {/* Tab 3: FAQs */}
        {activeTab === 'faq' && (
          <div style={{ background: '#ffffff', borderRadius: 8, border: '1px solid #ebd9c0', padding: '3rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#143d2f', margin: '0 0 2rem' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {[
                {
                  q: 'How long does it take to shape and fluff a Balsam Hill tree?',
                  a: 'For your first setup, expect 30 to 45 minutes to shape the branches outward and upward. We include soft cotton shaping gloves in every box to keep your hands comfortable while creating the signature full silhouette.'
                },
                {
                  q: 'How does the Easy Plug® lighting system work?',
                  a: 'With Easy Plug®, all light connections are wired directly through the center trunk pole. When you place one tree section into the next, the lights automatically connect. You only need to plug one master cord into the wall!'
                },
                {
                  q: 'What is the difference between True Needle® and Classic foliage?',
                  a: 'True Needle® foliage is made of injection-molded polyethylene (PE) cast directly from real forest evergreens to replicate three-dimensional branch tips, needles, and bark colors. Classic foliage uses flat PVC needles to add internal density.'
                },
                {
                  q: 'Can I use my $29 Branch Sample Kit voucher on sale trees?',
                  a: 'Yes! The $29 credit code included in your Branch Sample Kit can be applied toward any Balsam Hill tree purchase, including promotional and clearance pricing.'
                }
              ].map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid #eee', paddingBottom: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#143d2f', margin: '0 0 0.5rem', fontWeight: 700 }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Contact Us */}
        {activeTab === 'contact' && (
          <div style={{ background: '#ffffff', borderRadius: 8, border: '1px solid #ebd9c0', padding: '3rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#143d2f', margin: '0 0 1rem' }}>
              Contact Balsam Hill Customer Care
            </h2>
            <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Our seasonal specialists in California are available 7 days a week to help with orders, styling recommendations, and warranty service.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.5rem' }}>
              <div style={{ background: '#faf7f2', padding: '2rem', borderRadius: 8, border: '1px solid #ebd9c0' }}>
                <Phone size={28} color="var(--color-forest)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#143d2f', margin: '0 0 0.5rem' }}>Toll-Free Phone</h3>
                <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#891b29', marginBottom: '0.5rem' }}>
                  1-888-55-BALSAM
                </div>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>
                  (1-888-552-2572)<br />
                  Mon - Sat: 5:00 AM – 7:00 PM PST<br />
                  Sun: 7:00 AM – 5:00 PM PST
                </div>
              </div>

              <div style={{ background: '#faf7f2', padding: '2rem', borderRadius: 8, border: '1px solid #ebd9c0' }}>
                <Mail size={28} color="var(--color-forest)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#143d2f', margin: '0 0 0.5rem' }}>Email Support</h3>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '0.5rem' }}>
                  support@balsamhill.com
                </div>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>
                  Average response time under 4 hours during peak holiday season.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

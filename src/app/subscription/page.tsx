'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState('annual');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [billingInfo, setBillingInfo] = useState({
    name: 'Jane Smith',
    cardNumber: '6508 8234 3354 7832',
    expiryMonth: '21',
    expiryYear: '04',
    cvv: '786',
    country: 'United States',
    zipCode: '102258'
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}></div>
            <span className={styles.logoText}>APA.Ai</span>
          </Link>
          <div className={styles.headerRight}>
            <div className={styles.searchContainer}>
              <input 
                type="text" 
                placeholder="What Do You Want To Learn?"
                className={styles.searchInput}
              />
            </div>
            <button className={styles.signUpBtn}>Sign Up</button>
            <button className={styles.loginBtn}>Login</button>
          </div>
        </div>
      </header>

      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>Upgrade to Annual Subscription</h1>
          
          <div className={styles.billingSection}>
            <h3 className={styles.sectionTitle}>Billed To</h3>
            <input 
              type="text" 
              value={billingInfo.name}
              onChange={(e) => setBillingInfo({...billingInfo, name: e.target.value})}
              className={styles.input}
            />
          </div>

          <div className={styles.paymentSection}>
            <h3 className={styles.sectionTitle}>Payment Details</h3>
            <div className={styles.paymentMethods}>
              <button 
                className={`${styles.paymentMethod} ${paymentMethod === 'credit' ? styles.active : ''}`}
                onClick={() => setPaymentMethod('credit')}
              >
                <svg className={styles.cardIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="4" y="13" width="4" height="2" rx="0.5" fill="currentColor"/>
                </svg>
                Credit Card
              </button>
              <button 
                className={`${styles.paymentMethod} ${paymentMethod === 'bank' ? styles.active : ''}`}
                onClick={() => setPaymentMethod('bank')}
              >
                <svg className={styles.bankIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7H22L12 2Z" fill="currentColor"/>
                  <rect x="4" y="8" width="2" height="10" fill="currentColor"/>
                  <rect x="7" y="8" width="2" height="10" fill="currentColor"/>
                  <rect x="10" y="8" width="2" height="10" fill="currentColor"/>
                  <rect x="13" y="8" width="2" height="10" fill="currentColor"/>
                  <rect x="16" y="8" width="2" height="10" fill="currentColor"/>
                  <rect x="2" y="19" width="20" height="2" fill="currentColor"/>
                </svg>
                Bank Transfer
              </button>
            </div>

            <div className={styles.cardDetails}>
              <div className={styles.cardNumberContainer}>
                <input 
                  type="text" 
                  value={billingInfo.cardNumber}
                  onChange={(e) => setBillingInfo({...billingInfo, cardNumber: e.target.value})}
                  className={styles.cardNumberInput}
                />
                <div className={styles.cardIcons}>
                  <div className={styles.redCircle}></div>
                  <div className={styles.redCircle}></div>
                </div>
              </div>
              
              <div className={styles.cardRow}>
                <div className={styles.expiryContainer}>
                  <input 
                    type="text" 
                    value={billingInfo.expiryMonth}
                    onChange={(e) => setBillingInfo({...billingInfo, expiryMonth: e.target.value})}
                    className={styles.expiryInput}
                    placeholder="21"
                  />
                  <span className={styles.slash}>/</span>
                  <input 
                    type="text" 
                    value={billingInfo.expiryYear}
                    onChange={(e) => setBillingInfo({...billingInfo, expiryYear: e.target.value})}
                    className={styles.expiryInput}
                    placeholder="04"
                  />
                </div>
                <input 
                  type="text" 
                  value={billingInfo.cvv}
                  onChange={(e) => setBillingInfo({...billingInfo, cvv: e.target.value})}
                  className={styles.cvvInput}
                  placeholder="786"
                />
              </div>

              <select 
                value={billingInfo.country}
                onChange={(e) => setBillingInfo({...billingInfo, country: e.target.value})}
                className={styles.select}
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>

              <input 
                type="text" 
                value={billingInfo.zipCode}
                onChange={(e) => setBillingInfo({...billingInfo, zipCode: e.target.value})}
                className={styles.input}
                placeholder="Zip Code"
              />
            </div>
          </div>

          <div className={styles.actionButtons}>
            <button className={styles.cancelBtn}>Cancel</button>
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>

          <p className={styles.disclaimer}>
            By providing your card information, you allow us to charge your card for future payment in accordance with their terms.
          </p>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.planCard}>
            <h3 className={styles.planTitle}>Starter Plan</h3>
            
            <div className={styles.planOptions}>
              <div 
                className={`${styles.planOption} ${selectedPlan === 'onetime' ? styles.selected : ''}`}
                onClick={() => setSelectedPlan('onetime')}
              >
                <div className={styles.radioContainer}>
                  <input 
                    type="radio" 
                    name="plan" 
                    value="onetime"
                    checked={selectedPlan === 'onetime'}
                    onChange={() => setSelectedPlan('onetime')}
                    className={styles.radioInput}
                  />
                  <div className={styles.radioButton}></div>
                </div>
                <div className={styles.planInfo}>
                  <div className={styles.planHeader}>
                    <span className={styles.price}>$29</span>
                    <span className={styles.planType}>One-Time Unlock</span>
                  </div>
                  <p className={styles.planDescription}>Unlocks one course only</p>
                </div>
              </div>

              <div 
                className={`${styles.planOption} ${selectedPlan === 'monthly' ? styles.selected : ''}`}
                onClick={() => setSelectedPlan('monthly')}
              >
                <div className={styles.radioContainer}>
                  <input 
                    type="radio" 
                    name="plan" 
                    value="monthly"
                    checked={selectedPlan === 'monthly'}
                    onChange={() => setSelectedPlan('monthly')}
                    className={styles.radioInput}
                  />
                  <div className={styles.radioButton}></div>
                </div>
                <div className={styles.planInfo}>
                  <div className={styles.planHeader}>
                    <span className={styles.price}>$49</span>
                    <span className={styles.planType}>Monthly Subscription</span>
                  </div>
                  <p className={styles.planDescription}>Full platform access / Monthly auto-renewal</p>
                </div>
              </div>

              <div 
                className={`${styles.planOption} ${styles.recommended} ${selectedPlan === 'annual' ? styles.selected : ''}`}
                onClick={() => setSelectedPlan('annual')}
              >
                <div className={styles.recommendedBadge}>
                  <span className={styles.saveText}>Save $339 / year</span>
                </div>
                <div className={styles.radioContainer}>
                  <input 
                    type="radio" 
                    name="plan" 
                    value="annual"
                    checked={selectedPlan === 'annual'}
                    onChange={() => setSelectedPlan('annual')}
                    className={styles.radioInput}
                  />
                  <div className={styles.radioButton}></div>
                </div>
                <div className={styles.planInfo}>
                  <div className={styles.planHeader}>
                    <span className={styles.price}>$249</span>
                    <span className={styles.planType}>Annual Subscription</span>
                  </div>
                  <p className={styles.planDescription}>Full platform access / Annual auto-renewal</p>
                </div>
              </div>
            </div>

            <div className={styles.totalSection}>
              <div className={styles.totalHeader}>
                <h4 className={styles.totalTitle}>Total</h4>
                <div className={styles.totalPrice}>$249 / year</div>
              </div>
              <div className={styles.securityNote}>
                <svg className={styles.lockIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 3C13.66 3 15 4.34 15 6V8H9V6C9 4.34 10.34 3 12 3ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" fill="#6b7280"/>
                </svg>
                <span>Guaranteed to be safe & secure, ensuring that all transactions are protected with the highest level of security.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
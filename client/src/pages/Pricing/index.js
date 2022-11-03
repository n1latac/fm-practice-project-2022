import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import PricingBox from '../../components/PricingBox';
import styles from './PricingPage.module.css';

const PricingPage = () => {
  const [selectText, setSelect] = useState('Name');

const changeSelect = ({target: {value}}) => {
    setSelect(value);
}

    return (
        <>
        <Header />
        <main className={styles['main-container']}>
          <section className={styles['pricing-header']}>
            <div className={styles['header']}>
              Pricing for 
              <div className={styles['custom-select']}>{selectText}
                <select name="pricing-select" onChange={changeSelect}>
                  <option value="Name">Name</option>
                  <option value="Logo">Logo</option>
                  <option value="Tagline">Tagline</option>
                  <option value="Name and Logo">Name and Logo</option>
                </select>
              </div>
            </div>
            <img src='https://i.vimeocdn.com/video/890316322-67433145dfd7469eea8103ce38a934f49d8989b041effa97f4eb5c7e63ef753e-d_640'/>
          </section>
          <section className={styles['box-container']}>
            <PricingBox boxText={{
                  header: 'Bronze',
                  descr: 'Branding on a budget',
                  price: 299,
                  }}
                  color="#e0b48d">
                <p>Prize to Winner - $135 (Included)</p>
                <p> Validation Services & Upgrades ($39 value)</p>
                <ul>
                  <li>Matching .com URL</li>
                </ul>
                <p>Expected 300+ Entries</p>

              </PricingBox>
              <PricingBox boxText={{
                  header: 'Gold',
                  descr: 'Increase participation and basic brand validation',
                  price: 449,
                  }}
                  color="#e8b954">
                <p>Prize to Winner - $200 (Included)</p>
                <p> Validation Services & Upgrades ($305 value)</p>
                <ul>
                  <li>Matching .com URL</li>
                  <li> Instant Trademark Check (One Database)</li>
                  <li>NDA and More Privacy</li>
                  <li>Project Promotion (Basic)</li>
                  <li>Comprehensive Trademark Research</li>
                </ul>
                <p>Expected 600+ Entries</p>
                <p>Partial Refund Option</p>
              </PricingBox>
              <PricingBox boxText={{
                  header: 'Platinum',
                  descr: 'Work with top-level creatives, plus agency-style brand validation',
                  price: 749,
                  }}
                  color="#555">
                <p>Prize to Winner - $300 (Included)</p>
                <p> Validation Services & Upgrades ($979 value)</p>
                <ul>
                  <li>Matching .com URL</li>
                  <li> Instant Trademark Check (One Database)</li>
                  <li>NDA and More Privacy</li>
                  <li>Project Promotion (Basic)</li>
                  <li>Comprehensive Trademark Research</li>
                </ul>
                <p>Expected 1000+ Entries</p>
              </PricingBox>
              <PricingBox boxText={{
                  header: 'Managed',
                  descr: 'A full agency experience without the agency price tag',
                  price: 1499,
                  }}
                  color="#28d2d0">
                <p>Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.</p>
                <p>With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project.</p>
                <p>Learn More about Managed Contest Service</p>

              </PricingBox>
          </section>
          <section>
            <p>All packages include the award amount</p>
            <p>  for the winning creative and all fees and commissions.</p>
              <button className={styles['get-started']}>Get started now</button>
          </section>
        </main>
        </>
    );
}

export default PricingPage;

/*



*/

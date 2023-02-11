import React, {useState} from 'react';
import styles from './PricingPage.module.css' ;
import PricingStatus from '../../components/PricingStatus';
import Header from '../../components/Header/Header';

const Pricing = (props) => {
  const [select, setSelect] = useState('Name');

  const changeSelect = ({target: {value}}) => {
    setSelect(value);
  }


  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles[`header-first`]}>
            <span className={styles[`header-span`]}>Pricing for</span>
            <div className={styles[`header-select`]}>{select}
              <select name='pricing-select' onChange={changeSelect}>
                <option value='Name'>Name</option>
                <option value='Logo'>Logo</option>
                <option value='Tagline'>Tagline</option>
              </select>
            </div>
          </div>
          <div>
            <img src='./staticImages/squadhelp.png'></img>
          </div>
        </div>
        <div className={styles[`pricing-status`]}>
        <PricingStatus
          name='Bronze'
          underName='Branding on a budget'
          cost='US$349'
          color='#e0b48c'
          >
            <ul>
              <li>Prize to Winner - $135 (Included)</li>
              <li>Expected 30+ Entries</li>
            </ul>
        </PricingStatus>
        <PricingStatus
          name='Gold'
          underName='Increase participation and basic brand validation'
          cost='US$499'
          color='#e8b954'
          >
            <ul>
              <li>Prize to Winner - $225 (Included)</li>
              <li>
                Validation Services & Upgrades ($267 value)
                <ul className={styles.checkAdd}>
                  <li>NDA and More Privacy</li>
                  <li>Project Promotion (Basic)</li>
                </ul>
              </li>
              <li>Expected 50+ Entries</li>
              <li>Partial Refund Option</li>
            </ul>
          </PricingStatus>
          <PricingStatus
            name='Platinum'
            underName='Work with top-level creatives, plus agency-style brand validation'
            cost='US$799'
            color='#555'
          >
              <ul>
                <li>Prize to Winner - $300 (Included)</li>
                <li>
                  Validation Services & Upgrades ($644 value)
                  <ul className={styles.checkAdd}>
                    <li> Audience Testing View Sample Report</li>
                    <li> Tier A Creatives</li>
                    <li>NDA and More Privacy</li>
                    <li>Enhanced Project Promotion</li>
                    <li>Team Collaboration Tools</li>
                  </ul>
                </li>
                <li>Expected 60+ Entries</li>
                <li>Partial Refund Option</li>
              </ul>
          </PricingStatus>
          <PricingStatus
            name='Managed'
            underName='A full agency experience without the agency price tag'
            cost='US$1599'
            color='#28d2d0'
          >
              <ul>
                <li>Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project.Learn More about Managed Contest Service</li>
              </ul>
          </PricingStatus>
        </div>
      </div>
    </div>
    </>
  );
}

export default Pricing;

import React from 'react'
import { NextSeo } from 'next-seo';
import Image from 'next/image';

 const ModernSlaveryStatement  = () => {
  return (
      <>
        <NextSeo  
                title="Modern Slavery Statement | Oak Tree Mobility"
                description="Take a look at the Oak Tree Mobility website and our Modern Slavery Statement"
            />
            <div className='legal-container con-reg'>
                <div className='content'>
                    <h1>Modern Slavery Statement</h1>
                    <p>Oak Tree Mobility Ltd</p>
                    <h2>Modern Slavery Act Statement for the period ending August 31 2017</h2>
                    <p>This statement is written in accordance with Modern Slavery Act 2015 in relation to the financial period ending August 31 2017.</p>
                    <p>Oak Tree Mobility Ltd and its group (the “Group”) are committed to taking all appropriate actions to support the abolition of modern slavery and human trafficking. In doing so, we have developed a number of steps to mitigate the risks of modern slavery within our operations and supply chain. We recognise we have a responsibility to be alert to the risks, however small, in our business and supply chain. Staff at all levels are expected to report concerns and management are expected to act on them.</p>
                    <h3>Our business and supply chain</h3>
                    <p>The Group has been retailing riser recliner chairs, adjustable beds, bath lifts, stairlifts and related or ancillary products and services for almost 10 years. We design or specify a number of our product ranges in-house or with carefully selected manufacturing partners, selling to consumers across the UK through retail stores and home visits.</p>
                    <p>The majority of our furniture is made to order from a wide range of options with a focus on British Manufacturing, with over 97% of the Groups furniture manufactured in the UK by six key manufacturing partners.</p>
                    <p>Bathlifts are 100% assembled in the UK by a key partner, whilst scooters and ancillary products are sourced through reputable and long-standing UK based distributers that have direct partnerships with manufacturers in the E.U., China, Taiwan and the United States.</p>
                    <p>Our distribution, delivery and servicing activities are primarily fulfilled by third party logistics partners with a proportion completed by our in-house logistics operations. External third party logistics partners are based in the UK and managed by three key partners.</p>
                    <h3>Due diligence processes and business controls</h3>
                    <p>The Group is committed to social and environmental responsibility and has zero tolerance for slavery and human trafficking.</p>
                    <p>As part of this commitment, we have adopted a new Supplier Code of Conduct to which we will hold ourselves and our supply chain accountable. The Supplier Code of Conduct prohibits the use of forced, bonded (including debt bondage) or indentured labour, involuntary prison labour, slavery, or trafficking of persons and unlawful child labour.  OT will consider each supplier’s conduct vis-à-vis the Supplier Code of Conduct when awarding and/or renewing business with the supplier. OT will not award any contract to a supplier who is not prepared to comply, and will terminate contractual arrangements with any supplier found to be breaching that code as soon as possible.</p>
                    <p>The Group does not conduct detailed checks to evaluate all supplier compliance with company standards against trafficking and slavery throughout the entirety of their own supply chains. However, our existing suppliers will all be required to certify compliance with our Supplier Code of Conduct (which includes a requirement to ensure their own chains are compliant) and the results of certification will be audited. Contracts will be terminated as soon as possible in the event of a breach of the Code. Future contracts with suppliers will include a provision requiring compliance with the Supplier Code of Conduct.</p>
                    <p>OT only employ workers who are legally authorised to work in their location and facility, and ensure that all employees’ eligibility to work status is validated through appropriate documentation. OT is committed to ethical and socially responsible conduct in the workplace. Upon hire, OT will require all employees to read and acknowledge receipt and understanding of our corporate code of conduct as set out in OT Corporate Social Responsibility Policy.  This includes, among other things, certification that the employee will comply with all applicable laws and regulations. Human trafficking and slavery is a violation of such laws, and would constitute a violation of our corporate code of conduct. Such a violation could result in disciplinary action against the employee, including termination.</p>
                    <p>Our Corporate Social Responsibility Policy will be included in employee induction and training and all relevant employees dealing with suppliers will be required to familiarise themselves with the new Supplier Code of Conduct.  The Supplier Code of Conduct will be reviewed each year and any updates will be notified to employees.</p>
                </div>
                <div className='contact-wrapper'>
                    <div className='sticky-wrapper'>
                        <div className='icon-wrapper'>
                            <Image 
                                src='/icons/delivery/icon-phone-message.svg'
                                alt='Contact us icon'
                                layout='responsive'
                                width='75'
                                height='75'
                            />
                        </div>
                        <h3>Can't find what you're looking for?</h3>
                        <p>Give us a call on <a href='tel:0800094999'>0800 094 999</a> to speak to customer services</p>
                        <p>Monday - Friday 9am-7pm</p>
                        <p>Sunday 9am-5pm</p>
                    </div>
                </div>
            </div>
      </>
  )
}

export default ModernSlaveryStatement ;
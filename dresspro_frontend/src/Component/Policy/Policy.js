import React from 'react'
import "./Policy.css"

export const Policy = (props) => {
  let navbar_closer = props.navbar_closer;
  
  return (
    <div onClick={navbar_closer}>
      <div className="company_policy_info">
        {/* <div className="company_policy_nav_display">Home &gt; Company Policy</div> */}
        <div className="company_policy_nav_display">
           Company Policy
        </div>
      </div>

      

      <div class="company_policy_info_wrapper">
    <div class="company_policy_info_sub_wrapper">
      <div class="company_policy_header">Company Policy</div>
      <div class="company_policy_contents">
        <div class="company_policy_sub_headers">GOODS</div>
        <div class="company_policy_sub_contents">
          <ol>
            <li>
              Goods brought in for cargo shall be thoroughly checked and searched by our staff for compliance..
            </li>
            <li>
              Goods broughts in by delivery services would be thoroughly checked and senders must call us on delivery to identify the receiver full details and destinaton.
            </li>
            <li>
              We shall not accept any contrabands. Contraband goods varies with destinations. Some examples of contraband goods include
                 fresh vegetables, yam, cocoyam, potato, freshcorn, ponmo(cow skin), poultry products(e.g chicken), dairy product(e.g milk),meat products, yoghurt, gala, fruits, perfume, gold, diamond, chemicals, insecticides , herbs(Agbo), drugs(medication), lightening or whitening creams and soaps.
            </li>
            <li>
              Some nature of goods require extra details and hence attract extra charges. Examples of such goods are palm oil and other liquids. These goods need paddings and other attachment to avoid leakages while in transit. 
            </li>
            <li>
              All items must be properly packed with ziplock nylons
            </li>
            <li>
              All goods must be well labeled with name of its constituent for easy identification.
            </li>
            <li>
              Good received  are liable to CUSTOMS check and as such we shall not be responsible for removal of items, seizure etc
            </li>
            <li>
              Goods brought by third parties must come with a list of items in the package. This is to ensure that the right set of goods has been received
            </li>

            
          </ol>
        </div>
      </div>
      <div class="company_policy_contents">
        <div class="company_policy_sub_headers">DELIVERY</div>
        <div class="company_policy_sub_contents">
          {/* <br><br> */}
          <div><h4>DELIVERY TO DELIGHT EXPRESS </h4>

          <ol>
            <li>
              Delight Express Cargo is located at NAHCO EXPORT WAREHOUSE, SHED 3, OFF INTERNATIONAL AIRPORT ROAD. Contact us : <a href="http://wa.me/+2348058316087">Whatsapp</a>
            </li>
            <li>
              Mondays -Thursdays : Drop-off days within the time 10am - 3pm 
              {/* <br> */}
              Fridays: Documentation, handling over of consignments to airline, 9:30am 
            </li>
            <li>
              Third party delivery services like Uber, Gokada, Bolt, etc are allowed to drop-off
            </li><li>
              Goods delivered by third party sevices must come with a list of items in the package. This list is checked to ensure that the right amount of goods has been received.
            </li>
          </ol>
          </div>
          {/* <br><br> */}
          <div><h4>DELIVERY TO DESTINATION</h4>

            <ol>
              <li>
                Airport pickup attract CUSTOM cleareance fee
              </li>
              <li>
                Individuals would not be able to clear consignments weighing over 100kg i.e the service of a broker is required
              </li>
              <li>
                Our consolidation shipments will be cleared by our partners and attracts cleareance and delivery fees 
              </li>
              <li>
                Consignments arrival dates shall be estimated and are not final as circumstances beyond our control may arise at the port or with the Airline
              </li>
              <li>
                CUSTOM inspection delay at the airport may lead to demorrage and would require extra charges
                
              </li>
            </ol>
            </div>
        </div>
      </div>
      <div class="company_policy_contents">
        <div class="company_policy_sub_headers">PAYMENT</div>
        <div class="company_policy_sub_contents">
          <ol>
            <li>
             We accept payments in both naira and dollars
            </li>
            <li>
              Payments validates transfer of Consignments to the airline.
            </li>
            <li>
              Proof of Payments should be sent to our <a href="http://wa.me/+2348058316087">Whatsapp</a>
            </li>
            
          </ol>
        </div>
      </div>
      <br/>
    </div>
  </div>



    </div>
  );
}

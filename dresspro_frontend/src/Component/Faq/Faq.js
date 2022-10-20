import React from 'react'
import "./Faq.css"

const Faq = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="faq-title text-center pb-3">
              <h2>FAQ</h2>
            </div>
          </div>
          <div class="col-md-6 offset-md-3">
            <div class="faq" id="accordion">
              <div class="card-faq">
                <div class="card-header" id="faqHeading-1">
                  <div class="mb-0">
                    <h5
                      class="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-1"
                      data-aria-expanded="true"
                      data-aria-controls="faqCollapse-1"
                    >
                      <span class="badge">1</span>What does your company do?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-1"
                  class="collapse"
                  aria-labelledby="faqHeading-1"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p>
                      Delight Express Cargo offers entire range of freight
                      forwarding and logistics services to our customers and
                      agents worldwide.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-faq">
                <div class="card-header" id="faqHeading-2">
                  <div class="mb-0">
                    <h5
                      class="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-2"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-2"
                    >
                      <span class="badge">2</span> Where are you located?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-2"
                  class="collapse"
                  aria-labelledby="faqHeading-2"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p>
                      We are located at SHED 3, NAHCO EXPORT WAREHOUSE, BESIDE
                      MURTALA MUHAMMED INTERNATIONAL AIRPORT ROAD, LAGOS
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-faq">
                <div class="card-header" id="faqHeading-3">
                  <div class="mb-0">
                    <h5
                      class="faq-title" 
                      data-toggle="collapse"
                      data-target="#faqCollapse-3"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-3"
                    >
                      <span class="badge">3</span>What time are you open?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-3"
                  class="collapse"
                  aria-labelledby="faqHeading-3"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p>
                      We are open on <br />
                      Mondays -Thursdays : Drop-off days within the time 10am -
                      3pm <br />
                      Fridays: Documentation, handling over of consignments to
                      airline, 9:30am
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-faq">
                <div class="card-header" id="faqHeading-4">
                  <div class="mb-0">
                    <h5
                      class="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-4"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-4"
                    >
                      <span class="badge">4</span> Can I cargo these goods?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-4"
                  class="collapse"
                  aria-labelledby="faqHeading-4"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p>
                      Goods that cannot be transported varies with destinations.
                      These goods are usually referred to as contraband goods.
                      Some of those goods includes fresh vegetables, yam,
                      cocoyam, potato, freshcorn, ponmo(cow skin), poultry
                      products(e.g chicken), dairy product(e.g milk),meat
                      products, yoghurt, gala, fruits, perfume, gold, diamond,
                      chemicals, insecticides , herbs(Agbo), drugs(medication),
                      lightening or whitening creams and soaps.
                      If unsure of the good do well to contact us on <a href="http://wa.me/+2348058316087">Whatsapp</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-faq">
                <div class="card-header" id="faqHeading-5">
                  <div class="mb-0">
                    <h5
                      class="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-5"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-5"
                    >
                      <span class="badge">5</span> What currency do you accept
                      payment?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-5"
                  class="collapse"
                  aria-labelledby="faqHeading-5"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p>
                      We acccept payments in both dollars and naira
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-faq">
                <div class="card-header" id="faqHeading-6">
                  <div class="mb-0">
                    <h5
                      class="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-6"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-6"
                    >
                      <span class="badge">6</span> Can I send someone to deliver
                      to you?
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-6"
                  class="collapse"
                  aria-labelledby="faqHeading-6"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p>
                      Yes, you can send someone to deliver to us. Biker and Motor vehicle delivery services are also allowed, however your package must come with  personal details and list of items in the package. This is to ensure that the proper package content has been received
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-faq">
                <div class="card-header" id="faqHeading-7">
                  <div class="mb-0">
                    <h5
                      class="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-7"
                      data-aria-expanded="false"
                      data-aria-controls="faqCollapse-7"
                    >
                      <span class="badge">7</span> How can I reach you
                    </h5>
                  </div>
                </div>
                <div
                  id="faqCollapse-7"
                  class="collapse"
                  aria-labelledby="faqHeading-7"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <p>
                      You can reach us on our <a href="https://www.instagram.com/delightexpresscargo/">Instagram</a> or <a href="http://wa.me/+2348058316087">Whatsapp.</a>
                      We might take a while to respond but we would surely respond.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div></div>
  )
}

export default Faq
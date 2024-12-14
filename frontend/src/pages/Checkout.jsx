import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import image from '../assets/img/air.png'

const Checkout = () => {
  return (
    <div>
        <Header showLogin /> 
        <main className="checkout-main">
            <section className="left-sect">
                <h1>Billing Details</h1>
                <form>
                    <div className="input-label">
                        <label for="full-name">Full name<span>*</span></label>
                        <input type="text" id="full-name" name="full-name" className="input-field" required/>
                    </div>

                    <div className="input-label">
                        <label for="zip-code">Zip Code</label>
                        <input type="text" id="zip-code" name="zip-code" className="input-field"/>
                    </div>

                    <div className="input-label">
                        <label for="street-address">Street Address<span>*</span></label>
                        <input type="text" id="street-address" name="street-address" className="input-field" required/>
                    </div>

                    <div className="input-label">
                        <label for="apartment">Apartment, floor, etc. (optional)</label>
                        <input type="text" id="apartment" name="apartment" className="input-field"/>
                    </div>

                    <div className="input-label">
                        <label for="town-city">Town/City<span>*</span></label>
                        <input type="text" id="town-city" name="town-city" className="input-field" required/>
                    </div>

                    <div className="input-label">
                        <label for="phone-number">Phone Number<span>*</span></label>
                        <input type="tel" id="phone-number" name="phone-number" className="input-field" required/>
                    </div>

                    <div className="input-label">
                        <label for="email-address">Email Address<span>*</span></label>
                        <input type="email" id="email-address" name="email-address" className="input-field" required/>
                    </div>

                </form>
            </section>

            <section className="right-sect">
                <div className="product-info">
                    <img src={image}/>
                    <p className="product-name">Inalsa Air Fryer Fry-Light-1400W</p>
                    <p className="product-value">R$4.627,00</p>
                </div>

                <div className="total-value">
                    <div>
                      <p>Subtotal:</p>
                      <p>R$4.627,00</p>
                    </div>
                    <div>
                      <p>Shipping:</p>
                      <p>Free</p>
                    </div>
                    <div>
                      <p>Total:</p>
                      <p>R$4.627,00</p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  );
};

export default Checkout;

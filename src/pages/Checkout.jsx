import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

const Checkout = () => {
  return (
    <div>
        <Header showLogin /> 
        <main class="checkout-main">
            <section class="left-sect">
                <h1>Billing Details</h1>
                <form>
                    <div class="">
                        <label>Full name<span>*</span></label>
                        <input/>
                    </div>
                </form>
            </section>

            <section class="right-sect">

            </section>
        </main>
        <Footer />
    </div>
  );
};

export default Checkout;

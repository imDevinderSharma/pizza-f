import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | PizzaHost - Authentic Pizza in Meerut</title>
        <meta name="description" content="Learn about PizzaHost's journey, our passion for authentic Italian pizza, and our commitment to quality ingredients and exceptional service in Meerut." />
        <meta name="keywords" content="PizzaHost, about pizza restaurant, Meerut pizza, authentic Italian pizza, pizza history" />
        <link rel="canonical" href="https://pizzahost.com/about" />
        <meta property="og:title" content="About PizzaHost - Our Story & Mission" />
        <meta property="og:description" content="Discover the story behind PizzaHost, our commitment to authentic flavors, quality ingredients, and exceptional customer service." />
        <meta property="og:url" content="https://pizzahost.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div 
        className="about-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="about-hero">
          <div className="container">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="subtitle"
            >
              Our story, mission and passion for great pizza
            </motion.p>
          </div>
        </div>

        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <motion.div 
                className="about-content"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2>Our Story</h2>
                <p>
                  Founded in 2010, PizzaHost began as a small family-owned pizzeria in Meerut with a simple mission: 
                  to serve authentic, delicious pizza using only the freshest ingredients. Over the years, we've grown 
                  but our commitment to quality and taste remains unchanged.
                </p>
                <p>
                  Our founder, Rohit Sharma, brought his passion for Italian cuisine back to India after spending years 
                  perfecting the art of pizza-making in Naples, Italy - the birthplace of pizza. His vision was to create 
                  a place where people could experience authentic pizza flavors while enjoying the warmth of Indian hospitality.
                </p>
                <p>
                  Today, PizzaHost stands as one of Meerut's favorite pizza destinations, loved for our authentic recipes, 
                  friendly service, and commitment to the community.
                </p>
              </motion.div>
              
              <motion.div 
                className="about-image"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="/images/restaurant-interior.jpg" 
                  alt="PizzaHost restaurant interior" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/500x400?text=Restaurant+Interior";
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Values
            </motion.h2>
            
            <div className="values-grid">
              <motion.div 
                className="value-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="value-icon">🌿</div>
                <h3>Quality Ingredients</h3>
                <p>We source the freshest, highest-quality ingredients from local suppliers whenever possible.</p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="value-icon">👨‍🍳</div>
                <h3>Authentic Recipes</h3>
                <p>Our recipes honor traditional Italian pizza-making while adding our unique creative touches.</p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="value-icon">🤝</div>
                <h3>Community</h3>
                <p>We're proud to be part of the Meerut community and strive to give back whenever we can.</p>
              </motion.div>
              
              <motion.div 
                className="value-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="value-icon">♻️</div>
                <h3>Sustainability</h3>
                <p>We're committed to reducing our environmental impact through sustainable practices and eco-friendly packaging.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="location-section">
          <div className="container">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Visit Us
            </motion.h2>
            
            <div className="location-grid">
              <motion.div 
                className="location-details"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3>PizzaHost Meerut</h3>
                <p>
                  <strong>Address:</strong> Shop G-15, Inderlok Complex, Krishna Nagar, Near NB Colony, Pallavpuram, Meerut
                </p>
                <p>
                  <strong>Hours:</strong>
                </p>
                <ul>
                  <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
                  <li>Friday - Sunday: 11:00 AM - 11:00 PM</li>
                </ul>
                <p>
                  <strong>Phone:</strong> <a href="tel:+919560776095">+91 9560776095</a>
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:info@pizzahost.com">info@pizzahost.com</a>
                </p>
              </motion.div>
              
              <motion.div 
                className="location-map"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8555389965856!2d77.70243531508657!3d28.68980518239707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7d324a6581d7%3A0xf87a789a114b97b4!2sPallavpuram%2C%20Meerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1652789402964!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PizzaHost Meerut Location"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <motion.div 
              className="cta-content"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Ready to taste the best pizza in Meerut?</h2>
              <p>Order online for delivery or come visit us in-store to experience our warm hospitality!</p>
              <div className="cta-buttons">
                <a href="/menu" className="btn btn-primary">Order Now</a>
                <a href="/contact" className="btn btn-secondary">Contact Us</a>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default AboutPage; 
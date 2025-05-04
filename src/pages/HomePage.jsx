import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { placeholderImages } from '../assets/placeholder';
import PizzaQualities from '../components/PizzaQualities';
import './HomePage.css';

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  return (
    <div className="home-page" ref={ref}>
      <motion.div 
        className="hero-section"
        style={{ 
          scale: heroScale,
          opacity: heroOpacity,
          y: heroY,
          backgroundImage: `url(${placeholderImages.heroPizza})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content glass"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              #1 Pizza in Town
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hero-title"
            >
              Artisan Pizza 
              <span className="highlight">Crafted For You</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-text"
            >
              Experience the perfect blend of crispy crust, fresh ingredients,
              and mouthwatering flavors. Made with love, delivered to your doorstep.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="button-wrapper"
              >
                <Link to="/menu" className="btn btn-main pulse-strong glow-effect">
                  <span className="btn-text">Order Now</span>
                  <span className="btn-icon">🍕</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-wrapper"
              >
                <Link to="/menu" className="btn btn-outline shine-effect">
                  <span className="btn-text">View Menu</span>
                  <span className="btn-icon">👀</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            <div 
              className="hero-image"
              style={{ backgroundImage: `url(${placeholderImages.heroPizzaTransparent})` }}
            ></div>
            <div className="floating-elements">
              <div 
                className="floating-element tomato"
                style={{ backgroundImage: `url(${placeholderImages.tomato})` }}
              ></div>
              <div 
                className="floating-element basil-1"
                style={{ backgroundImage: `url(${placeholderImages.basil})` }}
              ></div>
              <div 
                className="floating-element basil-2"
                style={{ backgroundImage: `url(${placeholderImages.basil})` }}
              ></div>
              <div 
                className="floating-element cheese"
                style={{ backgroundImage: `url(${placeholderImages.cheese})` }}
              ></div>
              <div 
                className="floating-element pepper"
                style={{ backgroundImage: `url(${placeholderImages.pepper})` }}
              ></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="var(--surface-color)" fillOpacity="1" d="M0,96L30,112C60,128,120,160,180,170.7C240,181,300,171,360,144C420,117,480,75,540,80C600,85,660,139,720,165.3C780,192,840,192,900,170.7C960,149,1020,107,1080,96C1140,85,1200,107,1260,122.7C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div>
      
      <PizzaQualities />
      
      <section className="categories-section">
        <div className="container">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            Pizza Categories
          </motion.h2>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.id}
                {...category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              Featured Pizzas
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/menu" className="view-more">
                View All <span>→</span>
              </Link>
            </motion.div>
          </div>
          
          <div className="featured-grid">
            {featuredPizzas.map((pizza, index) => (
              <FeaturedPizzaCard 
                key={pizza.id}
                {...pizza}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <div className="container">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            What Our Customers Say
          </motion.h2>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Order Your Favorite Pizza?</h2>
            <p>Hungry? We're just a few clicks away. Order now and enjoy our delicious pizzas!</p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button-wrapper"
            >
              <Link to="/menu" className="btn btn-main btn-lg pulse-strong glow-effect">
                <span className="btn-text">Order Now</span>
                <span className="btn-icon">🔥</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Category Card Component
const CategoryCard = ({ id, name, image, description, index }) => {
  return (
    <motion.div 
      className="category-card glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: "var(--box-shadow-lg)" }}
    >
      <div className="category-image-container">
        <div 
          className="category-image" 
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="category-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`/menu?category=${id}`} className="btn btn-sm">
          Explore
        </Link>
      </div>
    </motion.div>
  );
};

// Featured Pizza Card Component
const FeaturedPizzaCard = ({ id, name, image, price, ingredients, index }) => {
  return (
    <motion.div 
      className="pizza-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        y: -15,
        boxShadow: "var(--box-shadow-lg)"
      }}
    >
      <div 
        className="pizza-image" 
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="pizza-badge">₹{price.toFixed(2)}</div>
      </div>
      <div className="pizza-content">
        <h3>{name}</h3>
        <p>{ingredients.join(', ')}</p>
        <Link to={`/menu?pizza=${id}`} className="btn btn-sm">
          Order Now
        </Link>
      </div>
    </motion.div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ name, avatar, rating, comment, index }) => {
  return (
    <motion.div 
      className="testimonial-card glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          <img src={avatar} alt={name} />
        </div>
        <div className="testimonial-info">
          <h4>{name}</h4>
          <div className="testimonial-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
            ))}
          </div>
        </div>
      </div>
      <p className="testimonial-comment">{comment}</p>
    </motion.div>
  );
};

// Sample Data
const categories = [
  {
    id: 'classic',
    name: 'Classic',
    image: placeholderImages.classic,
    description: 'Timeless recipes loved by generations'
  },
  {
    id: 'gourmet',
    name: 'Gourmet',
    image: placeholderImages.gourmet,
    description: 'Premium ingredients for discerning tastes'
  },
  {
    id: 'veggie',
    name: 'Vegetarian',
    image: placeholderImages.veggie,
    description: 'Fresh vegetables and plant-based options'
  },
  {
    id: 'spicy',
    name: 'Spicy',
    image: placeholderImages.spicy,
    description: 'Hot and fiery flavors for spice lovers'
  }
];

const featuredPizzas = [
  {
    id: 1,
    name: 'Margherita Deluxe',
    image: placeholderImages.margherita,
    price: 14.99,
    ingredients: ['Fresh Mozzarella', 'Basil', 'Cherry Tomatoes', 'Olive Oil']
  },
  {
    id: 2,
    name: 'Pepperoni Supreme',
    image: placeholderImages.pepperoni,
    price: 16.99,
    ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce', 'Oregano']
  },
  {
    id: 3,
    name: 'Veggie Paradise',
    image: placeholderImages.veggieSupreme,
    price: 15.99,
    ingredients: ['Bell Peppers', 'Mushrooms', 'Olives', 'Onions', 'Cherry Tomatoes']
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    avatar: placeholderImages.avatar1,
    rating: 5,
    comment: "The best pizza I've ever had! Quick delivery and always hot. Their Margherita is incredible."
  },
  {
    name: 'Michael Chen',
    avatar: placeholderImages.avatar2,
    rating: 5,
    comment: "We order every Friday for family night. The kids love the pepperoni and we love the quality ingredients."
  },
  {
    name: 'Emma Rodriguez',
    avatar: placeholderImages.avatar3,
    rating: 4,
    comment: "Great selection of vegetarian options. The veggie supreme is my go-to whenever I order."
  }
];

export default HomePage; 
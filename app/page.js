import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      {/* sd */}
      <section className={styles.hero}>
        <Image 
          src="/images/bg.jpg" 
          alt="Background" 
          fill
          className={styles.heroBackground}
          priority
        />
        
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>The Bridge Towards your Dreams</h1>
            <p>
              Welcome to iSCHO, your comprehensive Scholarship Application Portal. 
              We simplify the scholarship process, making it easier for deserving 
              students to access educational opportunities and achieve their academic dreams.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/login" className={`${styles.button} ${styles.primary}`}>
                <i className="fas fa-user-plus"></i>
                Get Started
              </Link>
              <Link href="/about" className={`${styles.button} ${styles.secondary}`}>
                <i className="fas fa-info-circle"></i>
                Learn More
              </Link>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <Image 
              src="/images/logo1.png" 
              alt="iSCHO Logo" 
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
        
        <Link href="#features" className={styles.scrollDown}>
          Scroll Down
          <i className="fas fa-chevron-down"></i>
        </Link>
      </section>

      <section className={styles.features} id="features">
        <div className={styles.featuresContainer}>
          <div className={styles.sectionTitle}>
            <h2>Why Choose iSCHO?</h2>
            <p>Discover the benefits of our integrated scholarship management system</p>
          </div>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-laptop"></i>
              </div>
              <h3>Easy Application</h3>
              <p>Simple and intuitive online application process with step-by-step guidance.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <h3>Real-time Updates</h3>
              <p>Stay informed about your application status with instant notifications.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Secure Platform</h3>
              <p>Your data is protected with advanced security measures and encryption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add Font Awesome */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
      />
    </>
  )
}
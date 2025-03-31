import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Full-Stack Web Developer</h1>
        <h2>Gurusewak Singh</h2>
        <p>I’m a full-stack web developer and I work remotely.</p>

        <a href="/resume.docx" download="Resume.docx">

    
          <button className={styles.cvButton}>Download CV</button>
        </a>
      </div>
      <div className={styles.imageContainer}>

        {/* 
        Uncomment and replace the image path if you have a profile image to display.
        <Image
          src="/images/profile.png" // Replace this with your profile picture path


          alt="Your Name"
          width={300}
          height={300}
          className={styles.profileImage}
        />
        */}


      </div>
    </section>
  );
}

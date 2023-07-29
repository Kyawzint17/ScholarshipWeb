import Link from 'next/link';
import styles from '../components/home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles['home-page']}>
      <div className={styles['imge-container']}>
        <Image src="/abac_logo.png" alt="Image" width={40} height={40} />
      </div>
      <div className={styles['text-container']}>
        <Link href={'/'}>
          <div className={styles['text']}>AU Scholar</div>
        </Link>
      </div>
      
      <div className={styles['imge2-container']}>
        <div  className={styles['text3']}>Scholarship Works</div>
        <Image src="/profile_pic.png" alt="Another Image" width={35} height={35} />
      </div>
      <div className={styles['text-container']}>
        <div className={styles['text2']}>Profile Name</div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import Link from 'next/link';
import styles from '../components/login.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform your login logic here
    // For simplicity, let's just display the entered email and password
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    
    <div className={styles['login-page']}>
      <div className={styles['login-container']}>
        <h1 className={styles['h1']}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles['label']}>Email</label>
          <div className={styles['input-group']}>
          <input type="email" value={email} onChange={handleEmailChange} />
          </div>
        </div>
        <div className={styles['form-group']}>
          <label className={styles['label']}>Password</label>
          <div className={styles['input-group']}>
          <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
        </div>
        <div className={styles['buttons-container']}>
        <button className={styles['loginbutton']} type="submit">
          <Link href="/home">
              Login
          </Link>
        </button>
        <button className={styles['registerbutton']}>
        <Link href="/register">
              Register
        </Link>
        </button>
        </div>
      </form>
      </div>
    </div>
    
  );
  
}


import Link from 'next/link';
import Image from 'next/image';

export default function Profile() {
    return (
    <Link href={'/home'}>
      <div>
        Profile
      </div>
    </Link>
    )
  }
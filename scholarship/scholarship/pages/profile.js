import Link from 'next/link';
import Image from 'next/image';

export default function Profile() {
    return (
    <Link href={'/staffHome'}>
      <div>
        Profile
      </div>
    </Link>
    )
  }
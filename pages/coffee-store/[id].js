import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const DynamicRoute = () => {
  const router = useRouter();
  return (
    <div>
      DynamicRoute: {router.query.id}{' '}
      <Link href='/'>
        <a>Back To Home</a>
      </Link>
    </div>
  );
};

export default DynamicRoute;

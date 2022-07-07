import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import coffeeStoresData from '../../data/coffee-stores.json';


export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log("params",params);
  return {
    props: {
      coffeeStores: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id
      })
    }, // will be passed to the page component as props
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: '0' } }, { params: { id: '1' } }],
    fallback: true,
  };
}

const DynamicRoute = (props) => {
  const router = useRouter();
  if(router.isFallback){
    return <div>Loading...</div>
  }
  return (
    <div>
      DynamicRoute: {router.query.id}{' '}
      <Link href='/'>
        <a>Back To Home</a>
      </Link>
      <p>{props.coffeeStores.name}</p>
    </div>
  );
};

export default DynamicRoute;

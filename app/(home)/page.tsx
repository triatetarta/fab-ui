import Link from 'next/link';

import { Example } from './example';

export default function HomePage() {
  return (
    <div className='flex flex-1 flex-col justify-center text-center'>
      <h1 className='mb-4 text-2xl font-bold'>fab ui</h1>
      <p>
        You can open{' '}
        <Link href='/docs' className='font-medium underline'>
          /docs
        </Link>{' '}
        and see the documentation.
      </p>

      <Example />
    </div>
  );
}

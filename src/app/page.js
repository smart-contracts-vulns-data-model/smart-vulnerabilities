import Link from 'next/link'

export default function Home () {
  return (
    <div className='flex flex-col items-center justify-center w-full text-lg'>
      <Link href='/main'>Main</Link>
    </div>
  )
}

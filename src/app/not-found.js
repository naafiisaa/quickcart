import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center'>
      <h2 className='text-center text-4xl mt-20'>Not Found</h2>
      <p className='text-center text-xl my-12'>Could not find requested resource</p>
      <Link className='btn btn-primary' href="/">Return Home</Link>
    </div>
  )
}
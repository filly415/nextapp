import Link from 'next/link'

function HomePage() {
   return (
      <>
         <p>Welcome to Next.js!</p>
         <Link href="/posts/first"><a>First Post</a></Link>
      </>	    
   )
}

export default HomePage
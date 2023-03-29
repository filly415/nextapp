import Link from 'next/link'

function HomePage() {
   return (
      <div>
         <h1>Welcome to Next.js!</h1>
         <div>
            <Link href="/posts/first">First Post</Link>
         </div>
      </div>	    
   )
}

export default HomePage
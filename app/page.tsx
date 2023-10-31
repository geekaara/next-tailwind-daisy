import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'

export default function Home() {
  return (
    <main>
      <h1>Issue Tracker</h1>
      <Link href="/users">Users</Link>
      <ProductCart />
    </main>
  )
}

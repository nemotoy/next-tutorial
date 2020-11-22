import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <h2>
          <a href="https://www.google.com/">Google</a>
      </h2>
    </>
  )
}

'use client'

interface Props {
  error: Error
}

export default function Error({ error }: Props) {
  return (
    <>
      <h1>Error page</h1>
      <h2>{error.message}</h2>
    </>
  )
}

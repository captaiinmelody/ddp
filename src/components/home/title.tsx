import React from 'react'

const title = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="w-full flex-center mb-8">
      <h1 className="w-1/2 text-yellow-500 text-center h4-normal">{children}</h1>
    </div>
  )
}

export default title

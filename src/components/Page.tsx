import { ReactElement } from "react"

interface PageProps {
  children: ReactElement
}

export default function Page({children} : PageProps) {
  return (
    <div>
      {children}
    </div>
  )
}

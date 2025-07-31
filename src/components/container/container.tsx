import { ReactNode } from "react";

export default function Container({children}: {children: ReactNode}) {
  return (
    <div className="py" style={{ maxWidth: "1200px", margin: '0 auto' }}>
      {children}
    </div>
  )
}

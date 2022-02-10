import React, { FC, SVGProps, useLayoutEffect, useRef, useState } from 'react'

export const SvgArea: FC<SVGProps<SVGSVGElement>> = ({ children, ...props }) => {
  const ref = useRef<SVGSVGElement>(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (ref.current != null) {
      setWidth(ref.current.clientWidth)
      setHeight(ref.current.clientHeight)
    }
  })

  return (
    <svg
      ref={ref}
      viewBox={`${-width / 2} 0 ${width} ${height}`}
      preserveAspectRatio='xMidYMid meet'
      {...props}
    >{children}
    </svg>
  )
}

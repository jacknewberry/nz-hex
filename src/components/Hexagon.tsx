import React, { forwardRef, useMemo } from 'react'

export const ROOT_3 = Math.sqrt(3)
export interface HexagonProps extends React.SVGProps<SVGPolygonElement> {
  size: number
  fill: string
}

export const Hexagon = forwardRef<SVGPolygonElement, HexagonProps>(({ size, ...props }, ref) => {
  /*
              1
       6**         **2
       *             *
       *      0      *
       *             *
       5**         **3
              4
     */

  // This could be cached for all hexes
  const points = useMemo(() => {
    const shortSide = size * ROOT_3 / 2

    const shortSidePx = shortSide.toFixed(2)
    const sizePx = size.toFixed(2)
    const halfSizePx = (size / 2).toFixed(2)

    return [
      [0, -sizePx],
      [shortSidePx, -halfSizePx],
      [shortSidePx, halfSizePx],
      [0, sizePx],
      [-shortSidePx, halfSizePx],
      [-shortSidePx, -halfSizePx]
    ].map(point => point.join()).join(' ')
  }, [size])

  return (
    <polygon
      ref={ref}
      points={points}
      {...props}
    />
  )
})

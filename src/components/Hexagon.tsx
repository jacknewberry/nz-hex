import React, { FC } from 'react'

export const ROOT_3 = Math.sqrt(3)
export interface HexagonProps extends React.SVGProps<SVGPolygonElement> {
  size: number
  fill: string
}
export const Hexagon: FC<HexagonProps> = ({ size, ...props }) => {
  /*
              1
       6**         **2
       *             *
       *      0      *
       *             *
       5**         **3
              4
     */
  const shortSide = (size * ROOT_3 / 2).toFixed(2)

  const points = [
    [0, -size],
    [shortSide, -size / 2],
    [shortSide, size / 2],
    [0, size],
    [-shortSide, size / 2],
    [-shortSide, -size / 2]
  ].map(point => point.join()).join(' ')

  return (
    <polygon
      points={points}
      {...props}
    />
  )
}

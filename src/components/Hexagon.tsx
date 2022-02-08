import React, { FC } from 'react'

export const ROOT_3 = Math.sqrt(3)
export interface HexagonProps {
  size: number
  x?: number
  y?: number
  fill: string
}
export const Hexagon: FC<HexagonProps> = ({ x = 0, y = 0, size, fill }) => {
  /*
              1
       6**         **2
       *             *
       *      0      *
       *             *
       5**         **3
              4
     */

  const shortSide = size * ROOT_3 / 2

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
      transform={`translate(${x},${y})`}
      fill={fill} stroke='black'
    />
  )
}

import React, { FC, forwardRef } from 'react'
import { useHexGrid } from './HexGrid'

export interface HexGroupProps extends React.SVGProps<SVGGElement> {
  col: number
  row: number
}
export const HexGroup: FC<HexGroupProps> = forwardRef(({ col, row, children, ...props }, ref) => {
  const { getPixelCoordinates } = useHexGrid()
  const { x, y } = getPixelCoordinates(col, row)

  return (
    <g
      ref={ref}
      transform={`translate(${x} ${y})`} {...props}
    >{children}
    </g>
  )
})

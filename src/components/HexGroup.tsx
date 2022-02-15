import React, { forwardRef } from 'react'
import { useHexGrid } from './HexGrid'

export interface HexGroupProps extends React.SVGProps<SVGGElement> {
  column: number
  row: number
}
export const HexGroup = forwardRef<SVGGElement, HexGroupProps>(({ column, row, children, ...props }, ref) => {
  const { getPixelCoordinates } = useHexGrid()
  const { x, y } = getPixelCoordinates(column, row)

  return (
    <g
      ref={ref}
      transform={`translate(${x} ${y})`}
      {...props}
    >
      {children}
    </g>
  )
})

import React, { forwardRef } from 'react'
import { useHexGrid } from './HexGrid'

export interface HexGroupProps extends React.SVGProps<SVGGElement> {
  column: number
  row: number
}
export const HexGroup = forwardRef<SVGGElement, HexGroupProps>(({ index, children, ...props }, ref) => {
  const { getPixelCoordinates } = useHexGrid()
  const { x, y } = getPixelCoordinates(index)

  return (
    <g
      ref={ref}
      transform={`translate(${x.toFixed(2)} ${y.toFixed(2)})`}
      {...props}
    >
      {children}
    </g>
  )
})

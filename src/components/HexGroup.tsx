import React, { forwardRef } from 'react'
import { useHexGrid } from './HexGrid'
import styled from 'styled-components'

export interface HexGroupProps extends React.SVGProps<SVGGElement> {
  column: number
  row: number
}
const PlainHexGroup = forwardRef<SVGGElement, HexGroupProps>(({ column, row, children, ...props }, ref) => {
  const { getPixelCoordinates } = useHexGrid()
  const { x, y } = getPixelCoordinates(column, row)

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

export const HexGroup = styled(PlainHexGroup)`
  &:focus {
    outline: none;
  }
`

import React, { FC, useContext } from 'react'
import { HexGridContext } from './HexGrid'

export interface HexGroupProps extends React.SVGProps<SVGGElement> {
  col: number
  row: number
}
export const HexGroup: FC<HexGroupProps> = ({ col, row, children, ...props }) => {
  const { getPixelCoordinates } = useContext(HexGridContext)
  const { x, y } = getPixelCoordinates(col, row)

  return <g transform={`translate(${x} ${y})`} {...props}>{children}</g>
}

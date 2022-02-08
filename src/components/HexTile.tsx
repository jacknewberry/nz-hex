import React, { FC, useContext } from 'react'
import { HexGridContext } from './HexGrid'

export const HexTile: FC<{col: number, row: number}> = ({ col, row, children }) => {
  const { getPixelCoordinates } = useContext(HexGridContext)
  const { x, y } = getPixelCoordinates(col, row)

  return <g transform={`translate(${x} ${y})`}>{children}</g>
}

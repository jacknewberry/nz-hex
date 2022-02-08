import React, { FC } from 'react'
import { ROOT_3 } from './Hexagon'

interface HexGridContextType {
  getPixelCoordinates: (col: number, row: number) => { x: number, y: number }
}
const HexGridContextDefault: HexGridContextType = {
  getPixelCoordinates: () => ({ x: 0, y: 0 })
}
export const HexGridContext = React.createContext(HexGridContextDefault)

export const HexGrid: FC<{ size: number}> = ({ children, size = 10 }) => {
  const getPixelCoordinates: HexGridContextType['getPixelCoordinates'] = (col, row) => {
    const width = ROOT_3 * size
    const height = size * 1.5
    return {
      x: col * width + (row % 2) * width / 2,
      y: row * height
    }
  }
  return <HexGridContext.Provider value={{ getPixelCoordinates }}>{children}</HexGridContext.Provider>
}

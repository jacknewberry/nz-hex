import React, { FC, useCallback, useContext } from 'react'
import { ROOT_3 } from './Hexagon'

interface HexGridContextType {
  size: number
  getPixelCoordinates: (column: number, row: number) => { x: number, y: number }
}
const HexGridContextDefault: HexGridContextType = {
  size: 15,
  getPixelCoordinates: () => ({ x: 0, y: 0 })
}
export const HexGridContext = React.createContext(HexGridContextDefault)
export const useHexGrid = (): HexGridContextType => useContext(HexGridContext)

export const HexGrid: FC<{ size: number }> = ({ size, children }) => {
  const getPixelCoordinates: HexGridContextType['getPixelCoordinates'] = useCallback((col, row) => {
    const width = ROOT_3 * size
    const height = size * 1.5
    return {
      x: col * width + (row % 2) * width / 2,
      y: row * height
    }
  }, [size])

  const value: HexGridContextType = {
    size,
    getPixelCoordinates
  }
  return <HexGridContext.Provider value={value}>{children}</HexGridContext.Provider>
}

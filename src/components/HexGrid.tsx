import React, { FC, useCallback, useContext } from 'react'
import { ROOT_3 } from './Hexagon'
import Tippy, { TippyProps, useSingleton } from '@tippyjs/react'

// plain Tippy:
import 'tippy.js/dist/tippy.css'

// shift-away animation:
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/dist/svg-arrow.css'

// theme:
import 'tippy.js/themes/translucent.css'

interface HexGridContextType {
  size: number
  getPixelCoordinates: (column: number, row: number) => { x: number, y: number }
  tippyTarget?: TippyProps['singleton']
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

  const [source, tippyTarget] = useSingleton()

  const value: HexGridContextType = {
    size,
    getPixelCoordinates,
    tippyTarget
  }

  return (
    <HexGridContext.Provider value={value}>
      <Tippy
        singleton={source}
        placement='right'
        animation='shift-away'
        theme='translucent'
        // suppresses "aria-describedby" attribute which would be meaningless when on all hexes
        aria={{ content: null }}
        // docs say this improves performance
        ignoreAttributes
      />
      {children}
    </HexGridContext.Provider>
  )
}

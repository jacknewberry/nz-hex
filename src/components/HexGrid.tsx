import React, { FC, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { ROOT_3 } from './Hexagon'
import Tippy, { TippyProps, useSingleton } from '@tippyjs/react'

// plain Tippy:
import 'tippy.js/dist/tippy.css'

// shift-away animation:
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/dist/svg-arrow.css'

// theme:
import 'tippy.js/themes/translucent.css'
import {
  forceCenter,
  forceCollide,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  SimulationNodeDatum
} from 'd3-force'

interface HexGridContextType {
  size: number
  getPixelCoordinates: (index: number) => { x: number, y: number }
  tippyTarget?: TippyProps['singleton']
}
const HexGridContextDefault: HexGridContextType = {
  size: 15,
  getPixelCoordinates: () => ({ x: 0, y: 0 })
}
export const HexGridContext = React.createContext(HexGridContextDefault)
export const useHexGrid = (): HexGridContextType => useContext(HexGridContext)

export const HexGrid: FC<{ size: number }> = ({ size, children }) => {
  const getHexPixelCoordinates = useCallback((row, column) => {
    const width = ROOT_3 * size
    const height = size * 1.5
    return {
      x: column * width + (row % 2) * width / 2,
      y: row * height
    }
  }, [size])

  const [source, tippyTarget] = useSingleton()

  // perhaps this should be useRef too?
  const [nodes, setNodes] = useState<SimulationNodeDatum[]>([])
  const domNodes = useRef<SVGElement[]>([])

  const [simulation] = useState(forceSimulation()
    .alphaDecay(0.1)
    .alphaTarget(0.2)
    // .force('charge', forceManyBody().strength(2))
    // .force('collision', forceCollide(11))
    .on('tick', () => {
      // console.log("tick node0", nodes[0])
      if (!nodes) {
        console.log('tick null nodes')
        return { x: 0, y: 0 }
      }
      if (!nodes[0]) {
        console.log('tick null node')
        return { x: 0, y: 0 }
      }

      const length = domNodes.current.length
      for (let i = 0; i < length; i++) {
        const transform = `translate(${nodes[i].x.toFixed(2)} ${nodes[i].y.toFixed(2)})`
        domNodes.current[i].setAttribute('transform', transform)
      }
    })
    .stop())

  const callbackRef = useCallback((index: number, row: number, column: number, partyId: string) => (newNode: SVGElement | null) => {
    // should handle removing the node if called with null
    if (newNode !== null) domNodes.current[index] = newNode
    // also save id?
    const hexPxCoords = getHexPixelCoordinates(row, column)
    nodes[index] = { hexX: hexPxCoords.x, hexY: hexPxCoords.y, partyId, ...hexPxCoords }

    // this means d3 initialises the nodes every time a new node is added,
    // maybe there is a better way to initialise
    simulation.nodes(nodes)
  }, [simulation])

  const getPixelCoordinates = useCallback((index: number) => {
    if (!nodes) {
      console.log('null nodes')
      return { x: 0, y: 0 }
    }
    if (!nodes[index]) {
      console.log('null node')
      return { x: 0, y: 0 }
    }
    return { x: nodes[index].x, y: nodes[index].y }
  }, [])

  const layoutAsHex = () => {
    simulation
      .force('charge', null)
      .force('collision', null)
      .force('x', forceX(0).x(d => d.hexX))
      .force('y', forceY(0).y(d => d.hexY))
      .alpha(1.0)
      .restart()
  }

  const partyCenters = {
    labour: { x: -200, y: 300 },
    national: { x: 0, y: 300 },
    act: { x: 120, y: 300 },
    green: { x: 180, y: 300 },
    maori: { x: 250, y: 300 }
  }

  const layoutAsParties = () => {
    simulation
      .force('charge', forceManyBody().strength(2))
      .force('collision', forceCollide(12).strength(1).iterations(2))
      .force('x', forceX(0).x(d => partyCenters[d.partyId].x))
      .force('y', forceY(300))
      .alpha(1)
      .restart()
  }

  const value: HexGridContextType = {
    size,
    getPixelCoordinates,
    tippyTarget,
    callbackRef
  }

  return (
    <HexGridContext.Provider value={value}>
      <button onClick={layoutAsHex}>NZ</button>
      <button onClick={layoutAsParties}>Parties</button>
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

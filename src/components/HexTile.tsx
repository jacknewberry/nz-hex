import { Hexagon } from './Hexagon'
import { HexGroup } from './HexGroup'
import React, { FC, useCallback } from 'react'
import { useHexGrid } from './HexGrid'
import styled from 'styled-components'

export interface HexTileProps {
  col: number
  row: number
  fill: string
  name: string
}
export const HexTile: FC<HexTileProps> = ({ row, col, fill, name }) => {
  const { size } = useHexGrid()
  const logName = useCallback(() => {
    console.log(name)
  }, [name])

  return <HexGroup col={col} row={row}><StyledHexagon size={size} fill={fill} onMouseOver={logName} /></HexGroup>
}

const StyledHexagon = styled(Hexagon)`
  cursor: pointer;
  transition: all 0.3s; // speed of return to normal
  filter: drop-shadow(0px 0px 0px #08f8);

  &:hover {
    transition: all 0.1s;

    filter: drop-shadow(0px 3px 3px rgba(91, 143, 212, 0.69))
            brightness(120%);
    transform: translateY(-2px);
  }
`

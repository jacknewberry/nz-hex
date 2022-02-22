import { Hexagon } from './Hexagon'
import { HexGroup } from './HexGroup'
import React, { FC } from 'react'
import { useHexGrid } from './HexGrid'
import styled from 'styled-components'
import { parties } from '../data/parties'
import { HexResult } from '../data/hexData'

// plain Tippy:
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

// shift-away animation:
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/dist/svg-arrow.css'

// theme:
import 'tippy.js/themes/translucent.css'

export interface HexTileProps extends HexResult {}

export const HexTile: FC<HexTileProps> = ({ hex: { row, column }, result }) => {
  const { size } = useHexGrid()
  const party = parties[result.partyId]
  const fill = party.primaryColor

  const tooltipContent = `${result.winner.firstName} ${result.winner.lastName} (${party.shortName})`
  return (
    <Tippy
      content={<span>{tooltipContent}</span>}
      placement='right'
      ignoreAttributes // docs say this improves performance
      animation='shift-away'
      theme='translucent'
    >
      <HexGroup column={column} row={row}>
        <StyledHexagon size={size} fill={fill} />
      </HexGroup>
    </Tippy>
  )
}

const StyledHexagon = styled(Hexagon)`
  cursor: pointer;
  transition: all 0.3s; // speed of return to normal

  &:hover {
    transition: all 0s;
    filter: brightness(130%);
  }
`

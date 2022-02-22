import { Hexagon } from './Hexagon'
import { HexGroup } from './HexGroup'
import React, { FC } from 'react'
import { useHexGrid } from './HexGrid'
import styled from 'styled-components'
import { parties } from '../data/parties'
import { HexResult } from '../data/hexData'
import Tippy from '@tippyjs/react'

export interface HexTileProps extends HexResult {}

export const HexTile: FC<HexTileProps> = ({ hex: { row, column }, result }) => {
  const { size, tippyTarget } = useHexGrid()
  const party = parties[result.partyId]
  const fill = party.primaryColor

  const tooltipContent = `${result.winner.firstName} ${result.winner.lastName} (${party.shortName})`
  return (
    <Tippy
      singleton={tippyTarget}
      content={<span>{tooltipContent}</span>}
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

import { Hexagon } from './Hexagon'
import { HexGroup } from './HexGroup'
import React, { FC, forwardRef } from 'react'
import { useHexGrid } from './HexGrid'
import styled from 'styled-components'
import { parties } from '../data/parties'
import { HexResult } from '../data/hexData'
import Tippy from '@tippyjs/react'

export interface HexTileProps extends HexResult {}

export const HexTile = forwardRef<SVGGElement, HexTileProps>(({ hex: { row, column }, result }, ref) => {
  const { size, tippyTarget } = useHexGrid()
  const party = parties[result.partyId]
  const fill = party.primaryColor

  const tooltipContent = `${result.winner.firstName} ${result.winner.lastName} (${party.shortName})`
  return (
    <HexGroup
      column={column}
      row={row}
      data-testid='electorate'
      ref={ref}
    >
      <Tippy
        singleton={tippyTarget}
        content={<>{result.electorateName}<br />{tooltipContent}</>}
      >
        <StyledHexagon
          size={size - 1}
          fill={fill}
        />
      </Tippy>
    </HexGroup>
  )
})

const StyledHexagon = styled(Hexagon)`
  cursor: pointer;
  transition: all 0.3s; // speed of return to normal

  &:focus {
    outline: none; // remove the default focus outline
    stroke: #000;
    stroke-width: 2px;
    paint-order: stroke;
    filter: brightness(130%);
  }

  &:hover {
    transition: all 0s;
    filter: brightness(130%);
  }
`

import { Hexagon } from './Hexagon'
import { HexGroup } from './HexGroup'
import React, { FC, useCallback } from 'react'
import { useHexGrid } from './HexGrid'
import styled from 'styled-components'
import { parties, PartyId } from '../data/parties'
import { ElectorateId } from '../data/nzElectoratesMaori2008'

// plain Tippy:
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

// shift-away animation:
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/dist/svg-arrow.css'

// theme:
import 'tippy.js/themes/translucent.css'

export interface ElectorateResult {
  electorateId: ElectorateId
  electorateName: string
  candidateName: string
  partyId: PartyId
  validVotes: number
  majority: number
  percentCandidateVotes: number
  onPartyList: boolean
}
export interface HexTileProps {
  column: number
  row: number
  result: ElectorateResult
}
export const HexTile: FC<HexTileProps> = ({ row, column, result }) => {
  const { size } = useHexGrid()
  const logName = useCallback(() => {
    console.log(result.electorateName, result.candidateName)
  }, [result.electorateName])
  const fill = parties[result.partyId].primaryColor

  return (
    <Tippy
      content={<span>Tooltip</span>}
      placement='right'
      ignoreAttributes // docs say this improves performance
      animation='shift-away'
      theme='translucent'
    >
      <HexGroup column={column} row={row}>
        <StyledHexagon size={size} fill={fill} onMouseOver={logName} />
      </HexGroup>
    </Tippy>
  )
}

const StyledHexagon = styled(Hexagon)`
  cursor: pointer;
  transition: all 0.2s; // speed of return to normal
  filter: drop-shadow(0px 0px 0px #08f8);

  &:hover {
    transition: all 0.05s;

    filter: drop-shadow(0px 3px 3px rgba(91, 143, 212, 0.69)) brightness(120%);
    //transform: translateY(-2px);
  }
`

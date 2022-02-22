import { PartyId } from './parties'
import hexesNzMaori2020 from './nzMaori2020.json'
import hexesNzAll2020 from './nzAll2020.json'
import { nzElectorateResults2020 } from './nzResults2020'

export interface HexJson {
  // Unable to type as "odd-r" due to ts json import limitations
  // https://github.com/microsoft/TypeScript/issues/32063
  layout: string
  hexes: Record<string, {
    r: number
    q: number
    n?: string
  }>
}
export interface HexCoordinate {
  column: number
  row: number
}

export type ElectorateId = string
export interface ElectorateResult {
  electorateName: string
  winner: {
    fullName: string
    firstName: string
    lastName: string
  }
  partyId: PartyId
  validVotes: number
  majority: number
  percentCandidateVotes: number
  onPartyList: boolean
}

export interface HexResult {
  id: string
  hex: HexCoordinate
  result: ElectorateResult
}

export const convertHexCoordinates = (hexJson: HexJson, moveDown: number = 0, moveRight: number = 0): Record<string, HexCoordinate> => {
  if (hexJson.layout !== 'odd-r') throw new Error(`Unknown hexJson layout: ${hexJson.layout}, only odd-r is supported currently.`)
  return Object.entries(hexJson.hexes).reduce<Record<string, HexCoordinate>>((acc, [id, hex]) => {
    acc[id] = { row: moveDown - hex.r, column: hex.q + moveRight }
    return acc
  }, {})
}

export const addResultsToHexes = (hexCoordinates: Record<string, HexCoordinate>, results: Record<string, ElectorateResult>): HexResult[] => {
  return Object.entries(hexCoordinates).map(([id, hex]) => {
    const result = results[id]
    if (result === undefined) throw new Error(`No result found for hex with id: ${id}`)
    return { id, hex, result }
  })
}

export const hexData = {
  nzMaori2020: addResultsToHexes(convertHexCoordinates(hexesNzMaori2020, 16, -10), nzElectorateResults2020),
  nzAllElectorates2020: addResultsToHexes(convertHexCoordinates(hexesNzAll2020, 14, -6), nzElectorateResults2020)
}

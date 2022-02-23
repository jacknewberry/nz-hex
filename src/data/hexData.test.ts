import {
  addResultsToHexes,
  convertHexCoordinates,
  ElectorateResult,
  HexCoordinate,
  hexData,
  HexJson, HexResult
} from './hexData'

describe('hexData', () => {
  // TODO: actually test how these are generated
  it('exports the maori electorates', () => {
    const electorates = hexData.nzMaori2020

    const expectedIkaroaRawhiti: HexResult = {
      id: 'IkaroaRawhiti',
      hex: { row: 7, column: 2 },
      result: {
        electorateName: 'Ikaroa-Rāwhiti',
        winner: {
          fullName: 'WHAITIRI, Melissa Heni Mekameka',
          firstName: 'Melissa',
          lastName: 'Whaitiri'
        },
        partyId: 'labour',
        validVotes: 13642,
        majority: 6045,
        percentCandidateVotes: 55.57,
        onPartyList: true
      }
    }

    expect(electorates).toHaveLength(7)
    expect(electorates[1]).toEqual(expectedIkaroaRawhiti)
  })

  describe('addResultsToHexes', () => {
    it('matches each hex to the correct result by id', () => {
      const mockHexCoordinates = {
        electorate_0: 'hex_0',
        electorate_1: 'hex_1'
      } as unknown as Record<string, HexCoordinate>
      const mockResults = {
        electorate_0: 'result_0',
        electorate_2: 'result_2',
        electorate_1: 'result_1'
      } as unknown as Record<string, ElectorateResult>

      const actualHexResults = addResultsToHexes(mockHexCoordinates, mockResults)

      const expectedHexResults = [
        { id: 'electorate_0', hex: 'hex_0', result: 'result_0' },
        { id: 'electorate_1', hex: 'hex_1', result: 'result_1' }
      ]
      expect(actualHexResults).toMatchObject(expectedHexResults)
    })
    it('throws when there is no result for a hex', () => {
      const mockHexCoordinates = {
        electorate_0: 'hex_0'
      } as unknown as Record<string, HexCoordinate>
      const mockResults = {
        electorate_1: 'result_1'
      } as unknown as Record<string, ElectorateResult>

      const getActualHexResults = (): HexResult[] => addResultsToHexes(mockHexCoordinates, mockResults)
      expect(getActualHexResults).toThrowError('No result found for hex with id: electorate_0')
    })
  })

  describe('convertHexCoordinates', () => {
    it('converts r and q coordinates into row and column, inverting r', () => {
      const mockHexJson: HexJson = {
        layout: 'odd-r',
        hexes: {
          electorate_0: {
            r: 44,
            q: 55
          }
        }
      }

      const actualHexCoordinates = convertHexCoordinates(mockHexJson)

      const expectedHexCoordinates = {
        electorate_0: { row: -44, column: 55 }
      }
      expect(actualHexCoordinates).toEqual(expectedHexCoordinates)
    })

    it('throws when the hexJson layout is not odd-r', () => {
      const mockHexJson: HexJson = {
        layout: 'even-r',
        hexes: {}
      }

      const getActualHexCoordinates = (): Record<string, HexCoordinate> => convertHexCoordinates(mockHexJson)
      expect(getActualHexCoordinates).toThrowError('Unknown hexJson layout: even-r, only odd-r is supported currently.')
    })
  })
})

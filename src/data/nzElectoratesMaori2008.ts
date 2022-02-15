/* This is loosely based on the hexjson format
   (See https://open-innovations.org/projects/hexmaps/hexjson)
   Differences:
   - typescript rather than json
   - "row" and "column" rather than "r" and "q"
   - web axis direction, i.e. origin at top-left, row numbers increase downward.
*/
export interface Hex<IdType extends string> {
  row: number
  column: number
  id: IdType
}
export type ElectorateId = 'TeTaiTokerau' | 'TamakiMakaurau' | 'HaurakiWaikato' | 'Waiariki' | 'TeTaiHauauru' | 'IkaroaRawhiti' | 'TeTaiTonga'
// name: "New Zealand Māori Electorates 2008",
// layout: "odd-r",

export const nzElectoratesMaori2008: Record<ElectorateId, Hex<ElectorateId>> = {
  TeTaiTokerau: { row: 0, column: 1, id: 'TeTaiTokerau' },
  TamakiMakaurau: { row: 1, column: 1, id: 'TamakiMakaurau' },
  HaurakiWaikato: { row: 2, column: 2, id: 'HaurakiWaikato' },
  Waiariki: { row: 2, column: 3, id: 'Waiariki' },
  TeTaiHauauru: { row: 3, column: 1, id: 'TeTaiHauauru' },
  IkaroaRawhiti: { row: 3, column: 2, id: 'IkaroaRawhiti' },
  TeTaiTonga: { row: 5, column: 0, id: 'TeTaiTonga' }
}

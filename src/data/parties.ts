export interface Party {
  id: PartyId
  shortName: string
  name: string
  primaryColor: string
}
export type PartyId = 'act' | 'green' | 'labour' | 'maori' | 'national' | 'mana' | 'nzFirst' | 'socialCredit' | 'advance' | 'conservative' | 'heartland' | 'cannabis' | 'one' | 'opportunities' | 'outdoors' | 'sustainable' | 'tea' | 'vision'

export const parties: Record<PartyId, Party> = {
  act: { id: 'act', shortName: 'ACT', primaryColor: '#FDE401', name: 'ACT New Zealand' },
  green: { id: 'green', shortName: 'Green', primaryColor: '#098137', name: 'Green Party of Aotearoa New Zealand' },
  labour: { id: 'labour', shortName: 'Labour', primaryColor: '#D82A20', name: 'New Zealand Labour Party' },
  maori: { id: 'maori', shortName: 'Māori Party', primaryColor: '#B2001A', name: 'Māori Party' },
  national: { id: 'national', shortName: 'National', primaryColor: '#00529F', name: 'New Zealand National Party' },
  mana: { id: 'mana', shortName: 'Mana', primaryColor: '#770808', name: 'Mana Movement' },
  nzFirst: { id: 'nzFirst', shortName: 'NZ First', primaryColor: '#000000', name: 'New Zealand First' },
  socialCredit: { id: 'socialCredit', shortName: 'Social Credit', primaryColor: '#CBE800', name: 'Social Credit Party (New Zealand)' },
  advance: { id: 'advance', shortName: 'Advance NZ', primaryColor: '#1987D1', name: 'Advance New Zealand' },
  conservative: { id: 'conservative', shortName: 'New Conservative', primaryColor: '#00AEEF', name: 'New Conservative Party (New Zealand)' },
  heartland: { id: 'heartland', shortName: 'Heartland', primaryColor: '#185533', name: 'Heartland New Zealand Party' },
  cannabis: { id: 'cannabis', shortName: 'Legalise Cannabis', primaryColor: '#33CC33', name: 'Aotearoa Legalise Cannabis Party' },
  one: { id: 'one', shortName: 'ONE', primaryColor: '#F9D11A', name: 'ONE Party' },
  opportunities: { id: 'opportunities', shortName: 'Opportunities', primaryColor: '#32DAC3', name: 'The Opportunities Party' },
  outdoors: { id: 'outdoors', shortName: 'Outdoors', primaryColor: '#008000', name: 'New Zealand Outdoors Party' },
  sustainable: { id: 'sustainable', shortName: 'Sustainable NZ', primaryColor: '#008080', name: 'Sustainable New Zealand Party' },
  tea: { id: 'tea', shortName: 'TEA', primaryColor: '#5A276C', name: 'New Zealand TEA Party' },
  vision: { id: 'vision', shortName: 'Vision NZ', primaryColor: '#095B7E', name: 'Vision NZ' }
}

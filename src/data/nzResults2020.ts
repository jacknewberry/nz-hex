/*
* Data retrieved from https://www.electionresults.govt.nz/electionresults_2020/statistics/winning-electorate-candidates.html
* (https://www.electionresults.govt.nz/electionresults_2020/statistics/index.html)
*
* For party results see: https://www.electionresults.govt.nz/electionresults_2020/statistics/votes-for-registered-parties-by-electorate.html
* */
import { ElectorateResult } from '../components/HexTile'
import { ElectorateId } from './nzElectoratesMaori2008'

export const nzElectorateResults2020: Record<ElectorateId, ElectorateResult> = {
  HaurakiWaikato: { electorateId: 'HaurakiWaikato', electorateName: 'Hauraki-Waikato', winner: { fullName: 'MAHUTA, Nanaia Cybele', lastName: "Mahuta", firstName:'Nanaia'}, partyId: 'labour', validVotes: 15885, majority: 9660, percentCandidateVotes: 68.01, onPartyList: true },
  IkaroaRawhiti: { electorateId: 'IkaroaRawhiti', electorateName: 'Ikaroa-Rāwhiti', winner: { fullName: 'WHAITIRI, Melissa Heni Mekameka', lastName: "Whaitiri", firstName:'Melissa'}, partyId: 'labour', validVotes: 13642, majority: 6045, percentCandidateVotes: 55.57, onPartyList: true },
  TamakiMakaurau: { electorateId: 'TamakiMakaurau', electorateName: 'Tāmaki Makaurau', winner: { fullName: 'HENARE, Peeni Ereatara Gladwyn', lastName: "Henare", firstName:'Peeni'}, partyId: 'labour', validVotes: 10256, majority: 927, percentCandidateVotes: 40.99, onPartyList: true },
  TeTaiHauauru: { electorateId: 'TeTaiHauauru', electorateName: 'Te Tai Hauāuru', winner: { fullName: 'RURAWHE, Adrian Paki', lastName: "Rurawhe", firstName:'Adrian'}, partyId: 'labour', validVotes: 12160, majority: 1053, percentCandidateVotes: 48.73, onPartyList: true },
  TeTaiTokerau: { electorateId: 'TeTaiTokerau', electorateName: 'Te Tai Tokerau', winner: { fullName: 'DAVIS, Kelvin', lastName: "Davis", firstName:'Kelvin'}, partyId: 'labour', validVotes: 14932, majority: 8164, percentCandidateVotes: 56.77, onPartyList: true },
  TeTaiTonga: { electorateId: 'TeTaiTonga', electorateName: 'Te Tai Tonga', winner: { fullName: 'TIRIKATENE, Rino', lastName: "Tirikatene", firstName:'Rino'}, partyId: 'labour', validVotes: 14277, majority: 6855, percentCandidateVotes: 50.40, onPartyList: true },
  Waiariki: { electorateId: 'Waiariki', electorateName: 'Waiariki', winner: { fullName: 'WAITITI, Rawiri Wikuki', lastName: "Waititi", firstName:'Rawiri'}, partyId: 'maori', validVotes: 12389, majority: 836, percentCandidateVotes: 46.78, onPartyList: true }
}

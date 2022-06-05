import {
  EnumProposalType,
  EnumProposalKpi,
  Proposal,
} from "../@types/proposal";

export const _proposalsActive: Proposal[] = [
  {
    name: "QiDAO",
    symbol: "Qi",
    isActive: true,
    reward: 56000,
    type: EnumProposalType.gauge,
    kpi: EnumProposalKpi.fixed,
    voteIncentive: false,
  },
  {
    name: "Aave",
    symbol: "Aave",
    isActive: true,
    reward: 1200,
    type: EnumProposalType.governance,
    kpi: EnumProposalKpi.variable,
    voteIncentive: false,
  },
];

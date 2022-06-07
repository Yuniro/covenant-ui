import {
  EnumProposalType,
  EnumProposalKpi,
  Proposal,
} from "../@types/proposal";
import { EnumProtocolName } from "../@types/protocol";

export const _proposalsActive: Proposal[] = [
  {
    name: "Vault Incentive Gauge",
    protocol: {
      name: EnumProtocolName.qidao,
      symbol: "qidao",
    },
    isActive: true,
    reward: 56000,
    type: EnumProposalType.gauge,
    kpi: EnumProposalKpi.fixed,
    voteIncentive: false,
  },
  {
    name: "Aave",
    protocol: {
      name: EnumProtocolName.aave,
      symbol: "aave",
    },
    isActive: true,
    reward: 1200,
    type: EnumProposalType.governance,
    kpi: EnumProposalKpi.variable,
    voteIncentive: false,
  },
];

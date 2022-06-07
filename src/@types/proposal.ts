import { Protocol } from "./protocol";

export type Proposal = {
  name: string;
  protocol: Protocol;
  isActive: boolean;
  reward: number;
  type: EnumProposalType;
  kpi: EnumProposalKpi;
  voteIncentive?: boolean;
};

export enum EnumProposalType {
  gauge = "Gauge",
  governance = "Governance",
}

export enum EnumProposalKpi {
  fixed = "Fixed",
  variable = "Variable",
}

export type ProposalState = {
  activeProposals: Proposal[];
  currentProposal: Proposal | null;
};

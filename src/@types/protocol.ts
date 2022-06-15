export type Protocol = {
  name: EnumProtocolName;
  symbol: ProtocolSymbol;
};

export type ProtocolSymbol = "qidao" | "olivedao" | "frax" | "aave";

export enum EnumProtocolName {
  qidao = "QiDAO",
  olivedao = "OliveDAO",
  frax = "Frax",
  aave = "Aave",
}

export enum EnumProtocolSymbolName {
  qidao = "Qi",
  olivedao = "ODao",
  frax = "Frax",
  aave = "Aave",
}

export const ProtocolsList: Protocol[] = [
  { name: EnumProtocolName.qidao, symbol: "qidao" },
  { name: EnumProtocolName.olivedao, symbol: "olivedao" },
  { name: EnumProtocolName.frax, symbol: "frax" },
  { name: EnumProtocolName.aave, symbol: "aave" },
];

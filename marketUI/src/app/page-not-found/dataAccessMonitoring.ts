export interface DataAccessMonitoring {
/*  element: string;
  hashElements: string;
  proofElements: string;
  verifiedElements: string; */

  monitoredData: string,
  uri: string,
  hash: string,
//  hashIdNode: string,
  groupId: string,
  proof: string,
  anchorsComplete: [string],
  hashIdCore: string,
  hashSubmittedNodeAt: Date,
  hashSubmittedCoreAt: Date,
//  branch: string,
  type: string,
  anchorId: string,
  expectedValue: string,
  verified: boolean,
  verifiedAt: Date
}

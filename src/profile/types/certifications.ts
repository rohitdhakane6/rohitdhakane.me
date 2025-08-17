export type Certification = {
  title: string;
  issuer: string;
  issuerLogoURL?: string;
  issuerIconName?: string;
  issueDate: string; // ISO 8601 format (YYYY-MM-DD)
  credentialID: string;
  credentialURL: string;
};

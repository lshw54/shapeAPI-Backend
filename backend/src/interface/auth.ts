export interface JwtPayload {
  uid: number;
  pv: number;
  isAdmin: boolean;
  exp?: number;
  iat?: number;
}

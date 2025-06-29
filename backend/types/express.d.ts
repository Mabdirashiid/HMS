import { Request } from 'express';

export interface DecodedToken {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

export interface AuthenticatedRequest extends Request {
  user?: DecodedToken;
}

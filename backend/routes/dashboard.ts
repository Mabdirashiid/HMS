import { Router } from 'express';
import type { Response, NextFunction } from 'express';
import { verifyToken, allowRoles } from '../middleware/auth.js';
import type { AuthenticatedRequest } from '../types/express.d.js'; // Use this one only

const router = Router();

// Admin-only route
router.get(
  '/admin',
  verifyToken,
  allowRoles('admin'),
  async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.json({ message: `Hello Admin!`, user: req.user });
    } catch (error) {
      next(error);
    }
  }
);

// Doctor-only route
router.get(
  '/doctor',
  verifyToken,
  allowRoles('doctor'),
  async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.json({ message: `Hello Doctor!`, user: req.user });
    } catch (error) {
      next(error);
    }
  }
);

// Nurse-only route
router.get(
  '/nurse',
  verifyToken,
  allowRoles('nurse'),
  async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.json({ message: `Hello Nurse!`, user: req.user });
    } catch (error) {
      next(error);
    }
  }
);

export default router;

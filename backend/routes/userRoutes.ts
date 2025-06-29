import { Router } from 'express';
const router = Router();

// ✅ This defines a dynamic route that receives a user ID
router.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Fetching user with ID: ${userId}` });
});

export default router;

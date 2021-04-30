export default function authenticated(req, res, next) {
  if (req.session.user.id) {
    return next();
  }
  return res.status(501).json({ message: 'login error' });
}

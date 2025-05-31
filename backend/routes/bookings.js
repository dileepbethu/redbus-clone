// backend/routes/bookings.js
const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Bookings route working' });
});

module.exports = router;



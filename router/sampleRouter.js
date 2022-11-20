const express = require('express');
const router = express.Router();

/**
 * Number of items to be displayed on one page
 */
const RECORD_COUNT = 10;

/**
 * Temporary data
 */
let sampleData = [];
for (let i = 0; i < 100; i++) {
  sampleData.push(i + 1);
}

router
  .get('/:page(*)', (req, res, next) => {
    const page = Number(req.params.page) || 1;
    const pager = {
      start: page * RECORD_COUNT - RECORD_COUNT,
      end: page * RECORD_COUNT
    };
    res.render('samplePagination.ejs', {
      data: sampleData.slice(pager.start, pager.end),
      pageLength: Math.ceil(sampleData.length / RECORD_COUNT),
      currentPage: page
    });
  });

module.exports = router;
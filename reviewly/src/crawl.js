const Crawler = require("crawler");

const c = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: (error, res, done) => {
    if (error) {
      console.log(error);
    } else {
      console.log(res);
      return res;
      //   const $ = res.$;
      // $ is Cheerio by default
      //a lean implementation of core jQuery designed specifically for the server
      //   console.log($("title").text());
    }
    done();
  },
});

// Queue just one URL, with default callback
c.queue(
  "https://www.daraz.lk/products/lenovo-he05-neckband-earphone-i170068876-s1118723103.html?spm=a2a0e.home.just4u.22.49714625YL7qcO&scm=1007.28811.295250.0&pvid=0d7c91a7-d01a-4d2b-bdd2-aa3259f027c5&clickTrackInfo=pvid%3A0d7c91a7-d01a-4d2b-bdd2-aa3259f027c5%3Bchannel_id%3A0000%3Bmt%3Ahot%3Bitem_id%3A170068876%3B"
);

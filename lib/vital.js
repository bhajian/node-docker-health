/**
 * Created by behnamhajian on 2016-10-31.
 */
module.exports = function(app, options) {
  /**
   * Check the health of the app
   * @param {Function(Error, object)} callback
   */
  app.get('/vitals/node-docker-health', function (req, res) {
    var vitals = {status : 'LIVE'};
    res.send(vitals);
  });
};

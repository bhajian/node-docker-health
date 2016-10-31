/**
 * Created by behnamhajian on 2016-10-31.
 */
module.exports = function(Vital) {
  /**
   * Check the health of the app
   * @param {Function(Error, object)} callback
   */

  Vital.check = function(callback) {
    var vitals = {status : 'LIVE'};

    callback(null, vitals);

  };
};
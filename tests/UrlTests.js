// @ts-nocheck
// @ts-ignore
const { assert, expect, Should } = require('chai');
const should = Should();
const chalk = require('chalk');
const {
  mError,
  mFYI,
  mInformation,
  mStatus,
  mSuccess,
  mWarning,
} = require('../modules/Messages');
const {
  addProtocol,
  hasFtpProtocol,
  hasHttpProtocol,
  hasHttpsProtocol,
} = require('../modules/URLs');

const url1 = 'ftp://someplace.net',
  url2 = 'http://anotherplace.com',
  url3 = 'https://asecuredplace.org',
  url4 = 'website.com';

exports.dummy = describe(mInformation('Dummy Test'), () => {
  describe(mFYI('Testing testing library'), () => {
    it(mWarning('should pass'), function () {
      /*  UM.list((err, data) => {
          table(err);
          expect(err).to.not.equal(null);
          err.should.contain.key("status");
          err.status.toLowerCase().should.equal("no users");
          expect(data).to.equal(null);
        }); */

      expect(null).to.equal(null);
    });
  });
});

exports.hasFtpProtocol = describe(
  mInformation('Tests for the URLs module'),
  () => {
    describe(
      mFYI(
        'Testing for the presence of then the non-presence of the FTP protocol'
      ),
      () => {
        it(mWarning('should pass in both cases'), () => {
          expect(hasFtpProtocol(url1)).to.equal(true);
          expect(hasFtpProtocol(url2)).to.equal(false);
        });
      }
    );
  }
);

exports.hasProtocol = describe(
  mInformation('Tests for the URLs module'),
  () => {
    describe(
      mFYI('Testing all has protocol methods, plus the addProtocol method'),
      () => {
        describe(
          mFYI(
            'First will test for missing protocol, then will test presence of protocol'
          ),
          () => {
            it(mWarning('should pass in all cases'), () => {
              expect(hasHttpProtocol(url4)).to.equal(false);
              expect(hasHttpsProtocol(url4)).to.equal(false);
              expect(hasFtpProtocol(url4)).to.equal(false);
              expect(hasHttpProtocol(addProtocol('http://', url4))).to.equal(
                true
              );
              expect(hasHttpsProtocol(addProtocol('https://', url4))).to.equal(
                true
              );
              expect(hasFtpProtocol(addProtocol('ftp://', url4))).to.equal(
                true
              );
            });
          }
        );
      }
    );
  }
);

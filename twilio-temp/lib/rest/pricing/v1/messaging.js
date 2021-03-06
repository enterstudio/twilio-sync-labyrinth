'use strict';

var _ = require('lodash');
var CountryList = require('./messaging/country').CountryList;
var Page = require('../../../base/Page');

var MessagingPage;
var MessagingList;
var MessagingInstance;
var MessagingContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Pricing.V1.MessagingPage
 * @augments Page
 * @description Initialize the MessagingPage
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns MessagingPage
 */
/* jshint ignore:end */
function MessagingPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(MessagingPage.prototype, Page.prototype);
MessagingPage.prototype.constructor = MessagingPage;

/* jshint ignore:start */
/**
 * Build an instance of MessagingInstance
 *
 * @function getInstance
 * @memberof Twilio.Pricing.V1.MessagingPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns MessagingInstance
 */
/* jshint ignore:end */
MessagingPage.prototype.getInstance = function getInstance(payload) {
  return new MessagingInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Pricing.V1.MessagingList
 * @description Initialize the MessagingList
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 */
/* jshint ignore:end */
function MessagingList(version) {
  /* jshint ignore:start */
  /**
   * @function messaging
   * @memberof Twilio.Pricing.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Pricing.V1.MessagingContext}
   */
  /* jshint ignore:end */
  function MessagingListInstance(sid) {
    return MessagingListInstance.get(sid);
  }

  MessagingListInstance._version = version;
  // Path Solution
  MessagingListInstance._solution = {};

  // Components
  MessagingListInstance._countries = undefined;

  Object.defineProperty(MessagingListInstance,
    'countries', {
    get: function countries() {
      if (!this._countries) {
        this._countries = new CountryList(
          this._version
        );
      }

      return this._countries;
    },
  });

  return MessagingListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Pricing.V1.MessagingInstance
 * @description Initialize the MessagingContext
 *
 * @property {string} name - The name
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
function MessagingInstance(version, payload) {
  this._version = version;

  // Marshaled Properties
  this.name = payload.name; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {};
}

module.exports = {
  MessagingPage: MessagingPage,
  MessagingList: MessagingList,
  MessagingInstance: MessagingInstance,
  MessagingContext: MessagingContext
};

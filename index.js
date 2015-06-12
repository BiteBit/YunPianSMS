// Generated by IcedCoffeeScript 1.8.0-c
(function() {
  var Path, YunPianSMS, request, _;

  request = require('request');

  Path = require('path');

  _ = require('lodash');

  YunPianSMS = (function() {
    function YunPianSMS(apiKey, version) {
      this.apiKey = apiKey;
      this.version = version != null ? version : 'v1';
      if (!this.apiKey) {
        throw new Error('No apiKey');
      }
      this.host = 'yunpian.com';
    }

    YunPianSMS.prototype.post = function(uri, data, cb) {
      var header;
      if (_.isFunction(data)) {
        cb = data;
        data = {};
      }
      data.apikey = this.apiKey;
      header = {
        method: 'POST',
        uri: uri,
        form: data
      };
      return request.post(header, function(error, resp, body) {
        return cb(error, body);
      });
    };

    YunPianSMS.prototype.getApiUrl = function(apiPath) {
      if (!apiPath) {
        throw new Error('No apiPath');
      }
      return "http://" + (Path.join(this.host, this.version, apiPath));
    };

    YunPianSMS.prototype.getUserInfo = function(cb) {
      return this.post(this.getApiUrl('user/get.json'), cb);
    };

    YunPianSMS.prototype.setUserInfo = function(userInfo, cb) {
      return this.post(this.getApiUrl('user/set.json'), userInfo, cb);
    };

    YunPianSMS.prototype.send = function(mobile, text, cb) {
      return this.post(this.getApiUrl('sms/send.json '), {
        mobile: mobile,
        text: text
      }, cb);
    };

    YunPianSMS.prototype.sendTpl = function(mobile, tpl_id, tpl_value, cb) {
      return this.post(this.getApiUrl('sms/tpl_send.json'), {
        mobile: mobile,
        tpl_id: tpl_id,
        tpl_value: tpl_value
      }, cb);
    };

    YunPianSMS.prototype.getTpl = function(tpl_id, cb) {
      return this.post(this.getApiUrl('tpl/get.json'), {
        tpl_id: tpl_id
      }, cb);
    };

    YunPianSMS.prototype.getDefaultTpl = function(tpl_id, cb) {
      return this.post(this.getApiUrl('tpl/get_default.json'), {
        tpl_id: tpl_id
      }, cb);
    };

    YunPianSMS.prototype.addTpl = function(tpl_content, cb) {
      return this.post(this.getApiUrl('tpl/add.json'), {
        tpl_content: tpl_content
      }, cb);
    };

    YunPianSMS.prototype.updateTpl = function(tpl_id, tpl_content, cb) {
      return this.post(this.getApiUrl('tpl/update.json'), {
        tpl_id: tpl_id,
        tpl_content: tpl_content
      }, cb);
    };

    YunPianSMS.prototype.deleteTpl = function(tpl_id, cb) {
      return this.post(this.getApiUrl('tpl/del.json'), {
        tpl_id: tpl_id
      }, cb);
    };

    YunPianSMS.prototype.pullStatus = function(page_size, cb) {
      return this.post(this.getApiUrl('sms/pull_status.json'), {
        page_size: page_size
      }, cb);
    };

    YunPianSMS.prototype.pullReply = function(page_size, cb) {
      return this.post(this.getApiUrl('sms/pull_reply.json'), {
        page_size: page_size
      }, cb);
    };

    YunPianSMS.prototype.getBlackWord = function(text, cb) {
      return this.post(this.getApiUrl('sms/get_black_word.json'), {
        text: text
      }, cb);
    };

    YunPianSMS.prototype.getReply = function(opts, cb) {
      return this.post(this.getApiUrl('sms/get_reply.json'), opts, cb);
    };

    return YunPianSMS;

  })();

}).call(this);

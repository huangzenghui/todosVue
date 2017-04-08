'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Todo = exports.todoDefs = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongodb = require('mongodb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoDefs = exports.todoDefs = '\n  type Todo{\n    _id: String\n    text: String\n    complete: Boolean\n    createAt: Date\n  }\n';

var Todo = exports.Todo = {
  insert: function insert(ctx, text) {
    var _this = this;

    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var _ref, _ref$ops, todo;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ctx.mongo.collection('todos').insert({ text: text, complete: false, createAt: new Date() });

            case 2:
              _ref = _context.sent;
              _ref$ops = (0, _slicedToArray3.default)(_ref.ops, 1);
              todo = _ref$ops[0];
              return _context.abrupt('return', todo);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  update: function update(ctx, id, text) {
    var _this2 = this;

    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return ctx.mongo.collection('todos').updateOne({ _id: (0, _mongodb.ObjectId)(id) }, { $set: { text: text } });

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  changeManyState: function changeManyState(ctx, ids, complete) {
    var _this3 = this;

    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var objIds;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              objIds = ids.map(function (id) {
                return new _mongodb.ObjectId(id);
              });
              _context3.next = 3;
              return ctx.mongo.collection('todos').updateMany({ _id: { $in: objIds } }, { $set: { complete: complete } });

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this3);
    }))();
  },
  removeMany: function removeMany(ctx, ids) {
    var _this4 = this;

    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var objIds;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              objIds = ids.map(function (id) {
                return new _mongodb.ObjectId(id);
              });
              _context4.next = 3;
              return ctx.mongo.collection('todos').remove({ _id: { $in: objIds } });

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this4);
    }))();
  },
  all: function all(ctx) {
    var _this5 = this;

    return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return ctx.mongo.collection('todos').find().sort({ 'createAt': -1 }).toArray();

            case 2:
              return _context5.abrupt('return', _context5.sent);

            case 3:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this5);
    }))();
  }
};
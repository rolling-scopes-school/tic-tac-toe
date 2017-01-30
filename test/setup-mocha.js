const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

global.expect = chai.expect;
global.sinon = sinon;
chai.use(sinonChai);

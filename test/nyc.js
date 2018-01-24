const sinon = require('sinon');
const proxyquire = require('proxyquire').noCallThru()

describe('nyc', () => {
  const cli = sinon.stub();
  const subject = proxyquire('../tasks/nyc', { 'simple-cli': cli });

  it('should callthrough to simple cli', () => {
    cli.should.have.been.calledWith('grunt-simple-nyc');
  })
})

import { Token } from 'utils/token'

App({
  onLaunch: function () {
    var token = new Token();
    token.verify();
  }
})
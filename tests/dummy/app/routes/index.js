import Route from '@ember/routing/route';

export default Route.extend({
  setupController (controller) {
    controller.format = "$0,0[.]00";
  }
});

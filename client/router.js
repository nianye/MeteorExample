import { mount } from 'react-mounter';
import { Blog, Admin, WuWei } from './index.jsx';

FlowRouter.route('/', { action() {
  mount(Blog);
}});
FlowRouter.route('/yz', { action() {
  mount(Blog);
}});
FlowRouter.route('/it', { action() {
  mount(Blog);
}});
FlowRouter.route('/gj', { action() {
  mount(Blog);
}});
FlowRouter.route('/tj', { action() {
  mount(Blog);
}});
FlowRouter.notFound = { action() {
  mount(WuWei);
}};
FlowRouter.route('/admin', { action() {
  mount(Admin);
}});

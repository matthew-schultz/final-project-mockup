import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/users', {
  name: 'Users_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Users_Page' });
  },
});

FlowRouter.route('/plants', {
  name: 'Plants_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Plants_Page' });
  },
});

FlowRouter.route('/botanodex', {
  name: 'Botanodex_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Botanodex_Page' });
  },
});

FlowRouter.route('/plant-identifier', {
  name: 'Plant_Identifier_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Plant_Identifier_Page' });
  },
});

FlowRouter.route('/admin', {
  name: 'Admin_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Admin_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};

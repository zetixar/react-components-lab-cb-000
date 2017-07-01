// to be able to test via 'learn' command I needed to run 'yarn add mocha-multi'
// Make sure to import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    let content = [];
    content.push(React.createElement('p', {}, 'Two grannies having the time of their life!'));
    content.push(React.createElement('p', {}, 'Passengers:'));
    content.push(React.createElement('ul', {}, [
      React.createElement('li',{}, 'Agnes'),
      React.createElement('li',{}, 'Muriel')
    ]));
    return React.createElement('div', {className: 'oldercoaster'}, content)
  }
};

export class InFrontOfYou extends React.Component {
  render() {
    let content = [];
    content.push(React.createElement('p', {}, 'You shouldn\'t look too far.'));
    content.push(React.createElement('p', {}, 'Sometimes, the solution is right in front of you.'));
    return React.createElement('div', {}, content)
  }
};

export class ButcherShop extends React.Component {
  render() {
    let content = [];
    content.push(React.createElement('p', {},'Hello! We have the following products for sale today:'));
    content.push(React.createElement('ul', {}, BUTCHER_PRODUCTS.map(p => React.createElement('li',{},p))));
    return React.createElement('div', {className: 'butcher-shop'}, content)
  }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);

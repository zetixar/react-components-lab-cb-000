const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', { className: 'oldercoaster' }, [
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('p', {}, 'Passengers:'),
      React.createElement('ul', {}, [
        React.createElement('li', {}, 'Agnes'),
        React.createElement('li', {}, 'Muriel'),
      ]),
    ]);
  }
});

class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('p', {}, "You shouldn't look too far."),
      React.createElement('p', {}, [
        'Sometimes, the solution is ',
        React.createElement('strong', {}, 'right in front of you.')
      ]),
    ]);
  }
}

class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', { className: 'butcher-shop' }, [
      React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
      React.createElement('ul', {},
        BUTCHER_PRODUCTS.map(product => React.createElement('li', {}, product))
      )
    ]);
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);

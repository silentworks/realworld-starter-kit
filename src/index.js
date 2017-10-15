import createHistory from 'history/createBrowserHistory';
import App from './components/App.html';

const history = createHistory();

var app = new App({
  target: document.querySelector('main')
});

const SetChildViewComponent = ((location) => {
  var path = location.pathname;
  var hash = location.hash;
 
  console.log('Path ==> ', path,' hash ==> ', hash);
  var hashValue = hash.replace('#/','');
  var childComp = 'feed';

  if (hashValue ) {
    childComp = hashValue;
  }
  app.set({ childview: childComp });
});


// Listens for location change and sets appropriate child view
history.listen(SetChildViewComponent);

// Intial view or handles when page refreshed
SetChildViewComponent(window.location);

window.app = app;

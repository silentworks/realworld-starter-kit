import createStateRouter from 'abstract-state-router';
import svelteRenderer from 'svelte-state-renderer';
import App from './components/App.html';
import Feed from "./components/Feed.html";

const renderer = svelteRenderer({});
const router = createStateRouter(renderer, document.querySelector('main'));

var app = new App();

window.app = app;

router.addState({
  name: 'app',
  route: '',
  template: app,
  defaultChild: 'feed'
});

router.addState({
  name: 'app.feed',
  route: '/',
  template: new Feed()
});

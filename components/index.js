import AtButton from './AtButton';
import AtButtonGroup from './AtButtonGroup';

const components = [
  AtButton,
  AtButtonGroup,
];

const install = (Vue) => {
  if (install.installed) return;
  components.map((component) => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  AtButton,
  AtButtonGroup,
};

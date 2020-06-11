import AtButton from './AtButton';
import AtButtonGroup from './AtButtonGroup';
import AtCheckbox from './AtCheckbox';
import AtRadio from './AtRadio';
import AtTable from './AtTable';


const components = [
  AtButton,
  AtButtonGroup,
  AtRadio,
  AtCheckbox,
  AtTable,
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
  AtRadio,
  AtTable,
};

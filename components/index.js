import AtButton from './AtButton';
import AtButtonGroup from './AtButtonGroup';

import AtRadio from './AtRadio';
import AtRadioGroup from './AtRadioGroup';
import AtCheckbox from './AtCheckbox';
import AtCheckboxGroup from './AtCheckboxGroup';
import AtTable from './AtTable';


const components = [
  AtButton,
  AtButtonGroup,
  AtRadio,
  AtRadioGroup,
  AtCheckbox,
  AtCheckboxGroup,
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
  AtRadioGroup,
  AtCheckbox,
  AtCheckboxGroup,
  AtTable,
};

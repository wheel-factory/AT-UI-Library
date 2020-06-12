import { shallowMount } from '@vue/test-utils';
import AtButton from '../../components/AtButton/AtButton.vue';

describe('AtButton.vue', () => {
  it('renders a button', () => {
    const wrapper = shallowMount(AtButton, {
      propsData: {},
    });
    expect(wrapper.contains('button')).toBe(true);
  });
});

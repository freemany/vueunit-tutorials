import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import SlideShow from '@/components/SlideShow.vue'

describe('SlideShow.vue', () => {
    it('render view', () => {
        const wrapper = mount(SlideShow)
        expect(wrapper.vm.$el.textContent).toContain('Create Your Own Title');
    })
});
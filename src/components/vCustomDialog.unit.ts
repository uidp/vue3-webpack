import CustomDialog from "./vCustomDialog.vue";
import { mount } from "@vue/test-utils";
const mockProps = {
  isOpen: true,
  size: 480,
  hasButtons: true,
};
const wrapper = mount(CustomDialog, {
  props: mockProps,
});

describe("CustomDialog", () => {
  it("should have props", async () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.vm.isOpen).toBe(true);
    expect(wrapper.vm.size).toBe(480);
  });

  it("should have close button's title", async () => {
    expect(wrapper.vm.buttonTitle).toStrictEqual("Close");
  });
});

import CustomDialog from "./vCustomDialog.vue";
import { mount } from "@vue/test-utils";
const mockProps = {
  size: 480,
  hasButtons: true,
  confirmBtnTitleKey: "Confirm",
  confirmBtnDisabled: false,
  nextBtnTitleKey: "Continue",
  nextBtnDisabled: false,
  buttons: ["cancel", "confirm"],
};

const wrapper = mount(CustomDialog, {
  props: mockProps,
});

describe("CustomDialog", () => {
  it("should have props", async () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.vm.hasButtons).toBe(true);
    expect(wrapper.vm.size).toBe(480);
  });

  // it("should have close button's title", async () => {
  //   expect(wrapper.vm.buttonTitle).toStrictEqual("Close");
  // });
});

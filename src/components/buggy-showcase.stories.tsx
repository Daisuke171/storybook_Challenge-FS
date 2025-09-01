import type { Meta, StoryObj } from "@storybook/react-vite";
import { BuggyShowcase } from "./buggy-showcase";
import { FixedShowcase, type FixedShowcaseProps } from "./fixed-showcase";

const meta: Meta<typeof BuggyShowcase> = {
  title: "Components/Showcase",
  component: BuggyShowcase,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    primaryLabel: { control: "text" },
    secondaryLabel: { control: "text" },
    textFieldLabel: { control: "text" },
    textFieldHelper: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof BuggyShowcase>;

export const Buggy: Story = {
  name: "Buggy Version",
  render: () => <BuggyShowcase />,
};

export const Fixed: StoryObj<typeof FixedShowcase> = {
  name: "Fixed Version",
  render: (args: FixedShowcaseProps) => (
    <FixedShowcase
      {...args}
      onPrimaryClick={() => alert("Primary clicked!")}
      onSecondaryClick={() => alert("Secondary clicked!")}
    />
  ),
  args: {
    title: "Registro",
    primaryLabel: "Enviar",
    secondaryLabel: "Cancelar",
    textFieldLabel: "Usuario",
    textFieldHelper: "Ingrese su nombre de usuario.",
  },
  argTypes: {
    title: { control: "text" },
    primaryLabel: { control: "text" },
    secondaryLabel: { control: "text" },
    textFieldLabel: { control: "text" },
    textFieldHelper: { control: "text" },
    primaryVariant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
    },
    secondaryVariant: {
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
    },
    primaryColor: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    secondaryColor: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    onPrimaryClick: { action: "primary button clicked" },
    onSecondaryClick: { action: "secondary button clicked" },
  },
};

export const Comparison: Story = {
  name: "Buggy vs Fixed",
  render: () => (
    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      <div>
        <h3 style={{ textAlign: "center" }}>Buggy</h3>
        <BuggyShowcase />
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Fixed</h3>
        <FixedShowcase />
      </div>
    </div>
  ),
};

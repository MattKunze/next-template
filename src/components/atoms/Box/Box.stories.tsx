import { ComponentStory, ComponentMeta } from "@storybook/react"

import Box from "."

export default {
  title: "Atoms/Box",
  Component: Box,
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: <div className="btn btn-primary">Box contents</div>,
  className: "bg-gray-200",
  m: 2,
  p: 1,
}

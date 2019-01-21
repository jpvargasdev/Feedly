import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
//import EmptyData from "../src/common/components/EmptyData/index.web";

storiesOf("Button", module)
  .add("with text", () => (
    <Button>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf("Animations", module)
  .add("EmptyData animation with lottie", () => (
    <div>
      Hello Juan
    </div>
  ));
![Main](https://github.com/aboeglin/babel-plugin-sre/workflows/Main/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/aboeglin/babel-plugin-snake-render-engine/badge.svg?branch=master)](https://coveralls.io/github/aboeglin/babel-plugin-snake-render-engine?branch=master)

# babel-plugin-snake-render-engine

Plugin that allows to get rid of the Node() wrapper.

Given:
```
import SRE from "snake-render-engine";
const SomeNode = (props) => {};
const MyNode = () => {};

const fn = () => {
  const OtherNode = () => {};
};
```
It produces:
```
import SRE from "snake-render-engine";
const SomeNode = Node(props => {});
const MyNode = Node(() => {});

const fn = () => {
  const OtherNode = Node(() => {});
};
```

Also note that for now you should import Node from snake-render-engine. Next iteration will take care of this in the background.

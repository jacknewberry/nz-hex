## NZ Hex 🇳🇿

### 🗒 Background
This is an experiment at embedding D3 (https://d3js.org/) in React.
Deployed here: https://nzhexmain.gatsbyjs.io/

New Zealand last held a general election in 2020. The country is divided into 72 electorates, each of whom elect one member of parliment. Each of the elected parties are represented by a different colour.

Toggling between the two views makes it easier to understand the relative number of MPs elected from each party.


### ⚙️ Technical
The challenge is that it is preferable for D3 to manipulate the DOM directly, but this doesn't fit easily into React's model of a virtual DOM.

With some use cases it is reasoanble to have an emulation or conversion layer; and still use React to update the DOM. However animating even a small number of visual elements quickly deteriorates when it is tied to the React render cycle.

I wanted to have a React style interface that uses tsx for elements in the D3 world. Callback refs are used to provide the d3 force simulation with direct access to the DOM node for each hexagon. The HexGrid containing the simulation is able to update the location of each node (HexTile) to create the animation.

React is still aware of the nodes and they are represented in tsx, meaning I can use other react libraries like styled-components and Tippy.

# Shading
- <img src="select-the-shader-editor.jpg" alt="select-the-shader-editor" />

## minimize/expand node
- <kbd>CTRL</kbd> + <kbd>H</kbd>

## node wrangler 
node wrangler add on lets you see the rendering of the node
- in the preferences enable add on node wrangler 
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>Left Click</kbd> on the node

### Shortcuts

#### Mapping
- select the image texture 
- <kbd>CTRL</kbd> + <kbd>T</kbd>

## add material
- Select new object
- Add material
- <img src="shading-new-material.jpg" alt="shading-new-material" width="900" />

## Add new node
- <kbd>SHIFT</kbd> + <kbd>A</kbd>

## Common nodes
- input -> object info
- converter -> color ramp
- texture -> image texture

## Combine lines
- <kbd>SHIFT</kbd> and <kbd>Left click</kbd> and drag the mouse over the lines to combine
- <img src="node-combine-lines.jpg" alt="node-combine-lines" />

## Procedural Texturing
- Texture -> Noise texture
- add vecter -> displacement
- <img src="procedural-texturing-layer-1.jpg" alt="procedural-texturing-layer-1" width="900" />
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>Left Click</kbd> on the panel `principled BSDF` (main layer)
- View in the render mode

### 2 layers of Procedural Texturing
- add 2 noise texture
- pass one through colorRamp - to darken the 2<sup>nd</sup> noise
- Add them
- Overlay the texture with noise and set the displacement scale very low
- <img src="procedural-texturing-layer-2.jpg" alt="procedural-texturing-layer-2" width="900" />
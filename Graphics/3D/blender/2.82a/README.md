# Blender 2.82a
# Level 1

## Tranformation
- <img src="transform-tools.jpg" alt="transform-tools" width="200" />
- <kbd>Left Click</kbd> on the object and tranform it
- <kbd>Right Click</kbd> to reset the tranform

## viewport
### Change the  axis
- <kbd>`</kbd> to open the menu
- Numpad keys
- <kbd>ALT</kbd> + <kbd>Middle Mouse</kbd> + move mouse

### Split the viewport
- <kbd>Right Click</kbd> on the red marking
- <img src="right-click-and-spilt-the-view.jpg" alt="right-click-and-spilt-the-view" width="700" />

### Rendered 
To see the light on the object
- <img src="view-rendered-object.jpg" alt="view-rendered-object" width="800" />
- or Press <kbd>Z</kbd>

### Light
- <img src="enable-lighting.jpg" alt="enable-lighting" width="900" />

### Light settings
- <img src="light-settings.jpg" alt="light-settings" width="900" />

### 3D cursor
Drops the new objects over the 3d cursor when they are added in the viewport
- <img src="3d-cursor-enable.jpg" alt="3d-cursor-enable" width="700" />
- <kbd>SHIFT</kbd> + <kbd>Right Click</kbd> - to move it
- <kbd>SHIFT</kbd> + <kbd>C</kbd> - to centre the cursor

### Change View for the mode (Layout, sculpting, etc)
- Press <kbd>N</kbd>
- <img src="change-view-zoom.jpg" alt="change-view-zoom" width="600" />

### Render Engine
- <img src="render-engine.jpg" alt="render-engine" width="800" />
- can change the render engine to Eveee (For Low graphics ex. games)
- can change the render engine to Cycles (For High graphics)

### Create a image
- Render -> Render Image
- Or Press <kbd>F12</kbd>

### View through the camera
- <img src="view-through-camera.jpg" alt="view-through-camera" width="400" />

## Add
- <kbd>SHIFT</kbd> + <kbd>A</kbd> to add mesh

## Start Search
- <kbd>F3</kbd>

## Set Monkey head on Fire
- Add monkey
- select monkey in object mode
- F3 -> add Quick Smoke
- (different from the video) select monkey
- choose Physics->Setting->Flow Type : "FIre + Smoke"
- (different from the video) select "Smoke Domain" object (the box around the monkey)
- In physics panel click "Bake Data" and wait... (progress in status bar on the bottom)
- After it 's finished play the animation.

## Toggle X Ray
- <img src="toggle-x-ray.jpg" alt="toggle-x-ray" width="800" />

## Proportional editing
For editing the vertices near by
- <img src="proportional-editing.jpg" alt="proportional-editing" width="400" />
- Enable it
- select any vertice or vertices
- Press <kbd>G</kbd> and move the object
- <img src="edit-the-vertice-proportionallly.jpg" alt="edit-the-vertice-proportionallly" width="400" />
- Scroll mouse up or down to get the lumpiness

### Moving the vertices
To stick the dragging object on the surface, instead of going inside the surface of other selections
- <img src="snap-to-face-of-the-object.jpg" alt="snap-to-face-of-the-object" width="600" />

## Smooth the object
- select the object by clicking on the object
- <img src="smooth-or-flat-the-object.jpg" alt="smooth-or-flat-the-object" width="600" />

## Add Modifiers
- <img src="modifier-properties.jpg" alt="modifier-properties" width="200" />
- <img src="select-modifier.jpg" alt="select-modifier" width="800" />

<b>Note:</b> The order of modifiers is important

### Subdivision
We can smooth the surfaces with these
- <img src="modifier-subdivision.jpg" alt="modifier-subdivision" width="600" />

### Solidyfy
- <img src="modifier-solidify.jpg" alt="modifier-solidify.jpg" width="600" />

## Selection
<b>Note:</b> Edit mode should be on

### Select the duplicates on the object 
- <kbd>SHIFT</kbd> + <kbd>D</kbd> to duplicate the selection
- Select any vertice of the duplicate
- <kbd>CTRL</kbd> + <kbd>L</kbd>

### Seperate the selection
- <kbd>SHIFT</kbd> + <kbd>D</kbd> to duplicate the selection
- Press <kbd>P</kbd> and select the `Selection` option

### All
- <kbd>Left Click</kbd> on the object
- Press <kbd>A</kbd>

### loops
- <kbd>ALT</kbd> + <kbd>Left Click</kbd> the vertex for vertical or horizontal selection of the lines running through the vertex
- <img src="select-loop.jpg" alt="select-loop.jpg" width="600" />
- <kbd>CTRL</kbd> + <kbd>I</kbd> to invert the selection

### Hide the selection
- Press <kbd>H</kbd>
- To unhide <kbd>ALT</kbd> + <kbd>H</kbd>

### Extrude the selection
- Select the vertices
- Press <kbd>E</kbd>

### Create a loop on the mesh
- <img src="create-a-loop-on-a-model.jpg" alt="create-a-loop-on-a-model.jpg" width="250" />
- Select the model
- <kbd>CTRL</kbd> + <kbd>R</kbd>
- scroll up and down to add more loops or reduce

## Subdivide
<b>Note:</b> Edit mode should be on
- <kbd>Right Click</kbd> on the object
- Select `Subdivide`

### Increase the smoothness
- <img src="subdivide-smoothness.jpg" alt="subdivide-smoothness.jpg" width="600" />

## Join object
- Aefore joining
- <img src="before-joining-the-objects.jpg" alt="before-joining-the-objects" width="600" />
- Select the parent object
- Then select the child object
- <kbd>CTRL</kbd> + <kbd>P</kbd> and select the `Object (Keep Transform)`
- After Joining
- <img src="after-joining-the-objects.jpg" alt="after-joining-the-objects" width="600" />

## Adding Material
- <img src="add-surface-material.jpg" alt="add-surface-material" width="600" />
- <img src="add-color-to-surface.jpg" alt="add-color-to-surface.jpg" width="600" />

### Material Properties
- Color
- Roughness (glossy to rough)
- Subsurface
  - Radius - R, G, B
  - Color 
    - give similar to object color
    - this is when the light goes into the object
    - like the thin layer of skin becomes red as we see it on the bright light

## Weight Paint
- <img src="weight-paint-add-delete.jpg" alt="weight-paint-add-delete" width="500" />
- reduce weight to have blue
- more weight gives red

### More weight paint layers on object
- <img src="add-vertex-group-for-weight-paint.jpg" alt="add-vertex-group-for-weight-paint.jpg" width="500" />

## Adding Particles 
- Select the object on which you want to add particles
- <img src="add-particles.jpg" alt="add-particles" width="600" />
- Option Emmission -> seed - emits a different pattern in the way partcles are added

### Select the object to duplicate on top of previously selected object
- <img src="pick-the-object-for-duplicating.jpg" alt="pick-the-object-for-duplicating" width="500" />
- Select the object

### Rotating
- <img src="randomize-rotations-of-the-particles.jpg" alt="randomize-rotations-of-the-particles" width="500" />

### selecting the vertex group (weight painter group)
- Particle property -> Vertex Group
- <img src="select-vertex-group-of-weight-paint.jpg" alt="select-vertex-group-of-weight-paint" width="500" />

### set origin
The origin is the point which will be attached to the surface of the object on which the particles are added
- Select the objects
- <kbd>Right Click</kbd> 
- set origin -> origin to geometry

### set priority
- <img src="set-priority-to-the-particles-in-collection.jpg" alt="set-priority-to-the-particles-in-collection" width="500" />

# Sculpting

## Brush
- To adjust the brush press <kbd>F</kbd>
- To adjust the brush strenth press <kbd>F</kbd> + <kbd>F</kbd>

# Shading
- Select new object
- Add material
- <img src="shading-new-material.jpg" alt="shading-new-material" width="900" />

## Add new node
- <kbd>SHIFT</kbd> + <kbd>A</kbd>

## Common nodes
- input -> object info
- converter -> color ramp
- texture -> image texture

## Procedural Texturing
- Texture -> Noise texture
- <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>Left Click</kbd> on the noise menu panel

<b>Note:</b> Also in the preferences enable add on - noise wrangler

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

# Texture Paint
- Add new texture
- save the new texture on the hard drive or <kbd>ALT</kbd> + <kbd>S</kbd> for quick save
- Go to shading and add `texture -> image texture`
- select the neew texture in the node

## Choose Color
- Press <kbd>N</kbd>
- pick the new color
- Press <kbd>X</kbd> to select

## Texture Mask
- Go to texture mask
- New
- <img src="texture-masking.jpg" alt="texture-masking.jpg" width="500" />

### Brush Overlay (darken with same color)
- <img src="texture-overlay-bake.jpg" alt="texture-overlay-bake.jpg" width="500" />
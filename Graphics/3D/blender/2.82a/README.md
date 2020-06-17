# Blender 2.82a
# Level 1

## Tranformation
- <img src="transform-tools.jpg" alt="transform-tools" width="200" />
- <kbd>Left Click</kbd> on the object and tranform it
- <kbd>Right Click</kbd> to reset the tranform

### Menu
<kbd>SHIFT</kbd> + <kbd>Space</kbd>

### Select inverse degrees
- hit <kbd>SHIFT</kbd> + axis key

### Rotate
- <kbd>R</kbd>
- type the degrees
- or press <kbd>CTRL</kbd> while moving to have 5 degree change

## viewport

### Toggle visibility
- if while importing some mesh from old version are looking as if they are disabled
- <img src="toggle-viewport-visibility.jpg" alt="toggle-viewport-visibility.jpg" width="600" />
- also enable the selection and viewport option in filter menu

### Menu
- Press <kbd>N</kbd>

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

- <kbd>SHIFT</kbd> + <kbd>S</kbd> to get menu
- Select `cursor to selected`

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

### Face orientation
See which face is viewable
- <img src="face-orientations.jpg" alt="face-orientations" width="400" />

### Start Search
- <kbd>F3</kbd>

### Toggle X Ray
- <img src="toggle-x-ray.jpg" alt="toggle-x-ray" width="800" />

## Editing the object

### Add
- <kbd>SHIFT</kbd> + <kbd>A</kbd> to add mesh

### Smooth the object
- select the object by clicking on the object
- <img src="smooth-or-flat-the-object.jpg" alt="smooth-or-flat-the-object" width="600" />

### delete face
- select the face
- press <kbd>X</kbd>
- <img src="delete-faces.jpg" alt="delete-faces" width="600" />

### Select faces
- <img src="select-faces-of-object.jpg" alt="select-faces-of-object" width="600" />
- then click on the middle of the faces

#### Flip Normals
- <img src="when-to-recalc-normals.jpg" alt="when-to-recalc-normals" width="600" />
- Select all vertices
- <kbd>SHIFT</kbd> + <kbd>N</kbd>
- or search for normal recalculations

### Edges
- <img src="select-edge-of-the-object.jpg" alt="select-edge-of-the-object" width="300" />
- To open up the Edge menu
- <kbd>CTRL</kbd> + <kbd>E</kbd>

#### Edge Filling
- select the edge and press <kbd>F</kbd> to add a face to part shown in image
- <img src="fill-in-face-using-edge.jpg" alt="fill-in-face-using-edge" width="300" />

#### Expand edge
- <kbd>CTRL</kbd> + <kbd>B</kbd>

## Edit Mode
- make sure the shape keys basis is selected and the 'Apply Shape keys in edit mode' is off
- <img src="edit-mode-shape-keys.jpg" alt="edit-mode-shape-keys">

### Proportional editing
For editing the vertices near by
- <img src="proportional-editing.jpg" alt="proportional-editing" width="400" />
- Enable it
- select any vertice or vertices
- Press <kbd>G</kbd> and move the object
- <img src="edit-the-vertice-proportionallly.jpg" alt="edit-the-vertice-proportionallly" width="400" />
- Scroll mouse up or down to get the lumpiness

### Extrude face
- select vertices
- Press <kbd>E</kbd>

#### Pull the surrounding of face (Crease)
- select vertices
- Press <kbd>SHIFT</kbd> + <kbd>E</kbd>

### Creating a bridge between cut faces
- <img src="select-cut-faces-of-object.jpg" alt="select-cut-faces-of-object" width="400" />
- Select cut faces
- press <kbd>F3</kbd> and search for Bridge

### Moving the vertices
To stick the dragging object on the surface, instead of going inside the surface of other selections
- <img src="snap-to-face-of-the-object.jpg" alt="snap-to-face-of-the-object" width="600" />

### move vertex along the edge
- Select the vertex and double press <kbd>G</kbd>
- <img src="move-vertex-along-the-edge.jpg" alt="move-vertex-along-the-edge" width="600" />

### Follow another object
- Atfore joining
- <img src="before-joining-the-objects.jpg" alt="before-joining-the-objects" width="600" />
- Select the parent object
- Then select the child object
- <kbd>CTRL</kbd> + <kbd>P</kbd> and select the `Object (Keep Transform)`
- After Joining
- <img src="after-joining-the-objects.jpg" alt="after-joining-the-objects" width="600" />

### Merge or join object
- <kbd>CTRL</kbd> + <kbd>J</kbd>

## Armature (Bones)
- <img src="armature-bones-tools.jpg" alt="armature-bones-tools" width="500" />

### create groups of bones
- Go to edit mode
- <img src="armature-bones-select-head.jpg" alt="armature-bones-select-head" width="300" />
- select top head of the bone
- press <kbd>E</kbd> and drag

### Add to a mesh
- select the mesh first and then the bones
- Press <kbd>CTRL</kbd> + <kbd>P</kbd>
- <img src="armature-bones-add-to-mesh.jpg" alt="armature-bones-add-to-mesh" width="600" />
- <img src="armature-bones-after-bone-added-to-mesh.jpg" alt="armature-bones-after-bone-added-to-mesh.jpg" width="500" />

### adding the bones we get the modifiers
- <img src="modifier-properties.jpg" alt="modifier-properties" width="200" />
- <img src="select-modifier.jpg" alt="select-modifier" width="800" />
- after adding bones to the mesh

<b>Note:</b> The order of modifiers is important

### Removing bones from mesh
- select the mesh and then the bones
- <kbd>ALT</kbd> + <kbd>P</kbd>

### select bones
- <img src="armature-bones-select-bones.jpg" alt="armature-bones-select-bones.jpg" width="500" />

### Subdivision Surface
We can smooth the surfaces with these
- <img src="modifier-subdivision.jpg" alt="modifier-subdivision" width="600" />

#### Bulid up
- <img src="how-to-get-rid-of-buildup.jpg" alt="how-to-get-rid-of-buildup" width="300" />
- <img src="subdivision-surface-enable-realtime.jpg" alt="subdivision-surface-enable-realtime" width="400" />
- <img src="after-enable-subdivision-surface-realtime.jpg" alt="after-enable-subdivision-surface-realtime" width="300" />

### Solidyfy
- <img src="modifier-solidify.jpg" alt="modifier-solidify" width="600" />

### Shrink wrap
- add the target object, select project mode if required
- <img src="view saved cart on stock ui.jpg" alt="view saved cart on stock ui" width="500" />

## Selection
<b>Note:</b> Edit mode should be on

### enable brush selection
- Press <kbd>C</kbd> and 
- Scroll for scaling
- <kbd>Middle Mouse</kbd> to Undo
- <kbd>Right Click</kbd> to disable

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
- <img src="select-loop.jpg" alt="select-loop" width="600" />
- <kbd>CTRL</kbd> + <kbd>I</kbd> to invert the selection

### Hide the selection
- Press <kbd>H</kbd>
- To unhide <kbd>ALT</kbd> + <kbd>H</kbd>

### Extrude the selection
- Select the vertices
- Press <kbd>E</kbd>

### Create a loop on the mesh
- <img src="create-a-loop-on-a-model.jpg" alt="create-a-loop-on-a-model" width="250" />
- Select the model
- <kbd>CTRL</kbd> + <kbd>R</kbd>
- scroll up and down to add more loops or reduce

### Create loop inside a circle
- Select a circle
- Press <kbd>I</kbd> and Drag

## Subdivide
<b>Note:</b> Edit mode should be on
- <kbd>Right Click</kbd> on the object
- Select `Subdivide`

### Increase the smoothness
- <img src="subdivide-smoothness.jpg" alt="subdivide-smoothness" width="600" />

## Adding Material
- <img src="add-surface-material.jpg" alt="add-surface-material" width="600" />
- <img src="add-color-to-surface.jpg" alt="add-color-to-surface" width="600" />

### Material Properties
- Color
- Roughness (glossy to rough)
- Subsurface
  - Radius - R, G, B
  - Color 
    - give similar to object color
    - this is when the light goes into the object
    - like the thin layer of skin becomes red as we see it on the bright light
- Transmission - make it 1 for glass
  - to remove the tint the base color should vue should be 1

### Copying material
- Select the object which you want to apply material to
- Select the object which you want to apply material from
- <kbd>CTRL</kbd> + <kbd>P</kbd> and select Materials

### water like depth and color
- <img src="water-depth-material.jpg" alt="water-depth-material" width="600" />

### Adding another material
- select the parts or faces of the object
- <img src="assign-second-material-to-same-object.jpg" alt="assign-second-material-to-same-object" width="600" />

## Weight Paint
- <img src="weight-paint-add-delete.jpg" alt="weight-paint-add-delete" width="500" />
- reduce weight to have blue
- more weight gives red

### More weight paint layers on object
- <img src="add-vertex-group-for-weight-paint.jpg" alt="add-vertex-group-for-weight-paint" width="500" />

### Select bones while painting
- Go to `object mode`
- Select the bones
- select the mesh
- Go to `weight paint mode`
- <kbd>SHIFT</kbd> + <kbd>Left Click</kbd> on bone to select
- <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>Left Click</kbd> on bone to unselect

### weird weight paint
- in the brush stroke - check if `Stabilize stroke` is ON

### Weight trasfer using data transfer modifier
- <img src="weight-transfer-data-transfer.jpg" alt="weight-transfer-data-transfer.jpg" width="500" />

### Tranfer weight 
- select the bones
- select the mesh
- go to weight paint
- select the envelop
- <img src="weight-paint-transfer-weight.jpg" alt="weight-paint-transfer-weight" width="500" />
- vertex will be added for that bone

## Adding Particles 
- Select the object on which you want to add particles
- <img src="add-particles.jpg" alt="add-particles" width="600" />
- Option Emmission -> seed - emits a different pattern in the way partcles are added

### Select the object to duplicate on top of previously selected object
- <img src="pick-the-object-for-duplicating.jpg" alt="pick-the-object-for-duplicating" width="500" />
- Select the object

### Rotate
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

### New rest pose
- <img src="new-rest-pose-copy-armature-modifier.jpg" alt="new-rest-pose-copy-armature-modifier" width="500" />
- select the mesh you want in new pose
- copy the armature modifier and apply
- select the armature and go to pose mode
- <img src="pose-apply-new-rest-pose.jpg" alt="pose-apply-new-rest-pose" width="700" />

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
- <img src="texture-masking.jpg" alt="texture-masking" width="500" />

### Brush Overlay (darken with same color)
- <img src="texture-overlay-bake.jpg" alt="texture-overlay-bake" width="500" />

# UV Editing

## Enable UV editor
- <img src="select-uv-editor.jpg" alt="select-uv-editor" width="900" />

## Perform UV editing
- select the lines on the object and <kbd>Right Click</kbd> and Mark Seam
- Press <kbd>U</kbd> for UV editing menu and select `Unwrap`
- also we can use the <kbd>CTRL</kbd> + <kbd>E</kbd> edge menu to mark seam

### brush select
- Press <kbd>C</kbd> 
  - <kbd>Right Click</kbd> to exit
  - Scroll up / down for brush size

## keep the UV without mesh selection
- <img src="uv-keep-selection-without-select-all-on-mesh.jpg" alt="uv-keep-selection-without-select-all-on-mesh" width="400" />

## Create an image
This gives us the UV Map - only after the uv are baked and saved in image file we can edit the UV mesh  
- Once the unwrap is done
- go to camera tool
- <img src="create-uv-map-by-baking.jpg" alt="create-uv-map-by-baking" width="400" />
- Bake it to write maps in the file

## Menu
- <img src="uv-editing-viewport-menu.jpg" alt="uv-editing-viewport-menu" width="500" />

## Reset UV unwrap
- Select the object you want to reset the UV
- Press <kbd>U</kbd> for UV editing menu
- Reset

## Error while UV unwrap
### Object has non uniform scale 
We get the error because the scales are different </br>
<img src="why-non-uniform-object-err.jpg" alt="why-non-uniform-object-err" width="500" />

- Select the Object
- Go to object mode
- <kbd>CTRL</kbd> + <kbd>A</kbd>
- Scale

### if UV Square doesnt work
If the addon doesn't work when you load it and select "to grid by shape", duplicate the mesh with Shift+D in object mode and try on the new mesh. It'll work. It's a bug.
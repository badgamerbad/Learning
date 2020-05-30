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

### Rendered 
To see the light on the object
- <img src="view-rendered-object.jpg" alt="view-rendered-object" width="800" />
- or Press <kbd>Z</kbd>

### Light
- <img src="enable-lighting.jpg" alt="enable-lighting" width="900" />

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

# Toggle X Ray
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

# Sculpting

## Brush
- To adjust the brush press <kbd>F</kbd>
- To adjust the brush strenth press <kbd>F</kbd> + <kbd>F</kbd>

# Texture

## Adding Material
- <img src="add-surface-material.jpg" alt="add-surface-material" width="600" />
- <img src="add-color-to-surface.jpg" alt="add-color-to-surface.jpg" width="600" />

# Blender 2.7

## Viewport

### Render Engine
- for viewing the `Material` view
- <img src="blender-render-engine.jpg" alt="blender-render-engine">

### Toggle rendered and solid mode
- <kbd>SHIFT</kbd> + <kbd>Z</kbd>

### Split screen and join screen
- Select viewport button (info is the default)
- <img src="select-viewport.jpg" alt="select-viewport">
- New view port button
- <img src="close-viewport.jpg" alt="close-viewport">
- <kbd>Left Click</kbd> on the three diagonal lines and drag the mouse into the other window
- or drag the three diagonal line at the bottom to split screen

### Undo history menu
<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Z</kbd>

### Divide the Mesh into selection parts
- Select the cloth (<kbd>Right click</kbd>)
- Change the object interaction mode to edit mode
- <img src="object-integration-mode-edit.jpg" alt="object integration mode">
- Press <kbd>a</kbd> to select all or unselect all
- Hover over the imported cloth
  - Press <kbd>L</kbd> to select its inner layer
  - Press <kbd>P</kbd> 
  - <img src="seperation-imported-cloth.jpg" alt="seperation imported cloth">
  - Select `Selection`

### Camera
- lock the camera to pan/ move/ rotate it
- press <kbd>Num 0</kbd>
- <img src="lock-camera-in-the-view.jpg" alt="lock-camera-in-the-view">

#### Rotate around the object
<kbd>Middle mouse</kbd> 

## Object (Mesh)

### Movement
#### snap to center
- move the cursor to center
- in the object mode
- <img src="object-snapping.jpg" alt="object-snapping">

### Duplicate
- select the mesh
- <kbd>SHIFT</kbd> + <kbd>D</kbd>

## Armature

### lock the location of the bones
- <img src="limit-bone-movement.jpg" alt="limit-bone-movement">

### lock the axis
- <img src="limit-bone-axis.jpg" alt="limit-bone-axis">

## Render view

### Show / hide mesh
- <img src="show-the-mesh-in-render-view.jpg" alt="show-the-mesh-in-render-view">

## Edit Mode

### Tools
- <img src="edit-mode-tools.jpg" alt="edit-mode-tools">

### Select along the vertex, face, edge
- <img src="edit-select-along-the-line.jpg" alt="edit-select-along-the-line">
- <kbd>ALT</kbd> + <kbd>Right Click</kbd>

### Edit mode the drag is lagging
- make sure the shape keys value is zero
- and the `Apply Shape keys in edit mode` is off
- <img src="edit-mode-shape-keys.jpg" alt="edit-mode-shape-keys">

## Modifiers

### subdivide for sculpting 
- <img src="sudivide-modifier-for-sculpting.jpg" alt="sudivide-modifier-for-sculpting">

## Shape keys

### Add new
- the default key is basis - i.e. its like nothing is edited in the mesh
- add another key (and then rename it)
  - make sure the value is 0
- go to edit mode 
  - edit the vertices, edges or faces
- go to object mode
- change the value of the shape key from 0 to 1

### adding another on top of added ones
- reset the previous ones to value 0

## Drivers
Animate the shape keys on bone movement

### Add
- <img src="add-drivers-to-shape-keys.jpg" alt="add-drivers-to-shape-keys">
- <kbd>Right Click</kbd> on the value numbers and select add drivers

### Graph editor
- <img src="graph-editor-for-drivers.jpg" alt="graph-editor-for-drivers">
- once the key is added it will appear in the left panel
- select the drivers view

### Add animation
- <img src="add-animation-to-bone.jpg" alt="add-animation-to-bone">
- select the new key
- select type
- select Obj/Bone
  - select the sub bone (face-brows) of the armature
- select direction (Y location) and `local space` in which the animation to be made
- add modifier and select the direction value
  - this value decides the speed at which the shape key value change with the bone movement

### Proportional editing
- the parts of the mesh which gets selected by pressing <kbd>L</kbd> are called `Connected`
- <img src="edit-only-connected-mesh-parts.jpg" alt="edit-only-connected-mesh-parts">

## Weight paint
### and weight transfer
- Select the clothing layer (<kbd>SHIFT</kbd> + <kbd>right click</kbd>)
- Select the imported cloth
- Change the object mode to weight paint mode
  - <img src="object-integration-mode-weight-paint.jpg" alt="object integration mode weight paint">
- Go to tools 
  - <img src="where-is-tools.jpg" alt="where is tools">
- Select trasnfer weight
  - <img src="where-is-transfer-weights.jpg" alt="where is transfer weights">

### If the weight paint is not getting applied
- <img src="weight-paint-option-to-paint.jpg" alt="weight-paint-option-to-paint">

### Transfer the weight between mesh
- place the mesh over the target mesh
- <img src="place-weight-mesh-over-target-mesh.jpg" alt="place-weight-mesh-over-target-mesh" width="400" />
- select both the mesh
- <img src="weight-transfer-select-both-mesh.jpg" alt="weight-transfer-select-both-mesh" width="400" />
- Also select group as active
- <img src="weight-transfer-select-active-group.jpg" alt="weight-transfer-select-active-group.jpg" width="400" />
<b>Note: </b> if this setting is not available just select any mesh and click on `transfer weight`
- go to tools -> weight tools -> transfer weight
- <img src="weight-transfer-and-transfer-weight.jpg" alt="weight-transfer-and-transfer-weight.jpg" width="400" />

### To remove the sticky sides
- Select the cloth
  - <img src="select-the-cloth.jpg" alt="select the cloth">
- select the heat signature places (Bones or the diamonds)
  - <img src="bones-or-dianonds.jpg" alt="bones or dianonds">
- Select the face selection masking tool
  - <img src="face-selection-masking-tool.jpg" alt="face selection masking tool">
- when to cool it down
  - <img src="when-to-cool-it.jpg" alt="when to cool it">
- when to heat it up
  - <img src="when-to-heat-it.jpg" alt="when to heat it">

## Texturing
<b>Note: </b> look for tiled image for texturing

### Create
- Select the mesh
- click on New and add the name
- <img src="create-new-texture-for-mesh.jpg" alt="create-new-texture-for-mesh">

### Baking (Generating the texture Maps)
<b>Note: </b> if the exported obj doesnt have the uv layer with texture, then select the render engine - blender render

### Bake Node
- select the node where the blender should save the bake to
- do not join the node to diffuse BSDF or the output node
- <img src="node-for-baking.jpg" alt="node-for-baking">

### baking the normals
- select the mesh u want to have as normal (source mesh)
- select the destination mesh
- <img src="baking-normals.jpg" alt="baking-normals">

#### AO (Ambient Occulusion)
- select the mesh and go into `edit mode`
- Make sure the ambient texture is on under tools world -> Ambient Occulusion
- <img src="world-tools-ambient-occulusion.jpg" alt="world-tools-ambient-occulusion">
- Go to camera tool
- Under Bake and select Ambient Occulusion
- <img src="camera-tool-ambient-occulusion-and-bake.jpg" alt="camera-tool-ambient-occulusion-and-bake">

#### Full Bake
- select the mesh and go into `edit mode`
- Make sure AO is unchecked in the world
- <img src="adjust-the-lamp-full-render-bake.jpg" alt="adjust-the-lamp-full-render-bake">
- adjust the lighting on the mesh
- <img src="camera-tool-full-render-bake.jpg" alt="camera-tool-full-render-bake">
- Click on bake
- <img src="after-full-render-bake.jpg" alt="after-full-render-bake">
- after bake will get this

#### Importing the texture
- <img src="texture-mode-selected.jpg" alt="texture-mode-selected">
- make sure the texture mode is on
- <img src="texture-import-button.jpg" alt="texture-import-button">
- Go to edit mode and select the texture
- <img src="select-the-imported-texture.jpg" alt="select-the-imported-texture">

### Rendering
- sampling
- <img src="render-the-image-quality.jpg" alt="render-the-image-quality">
- select new window to render in new `blender window`
- higher Render and Preview - high quality and higher computer resources will be used

## UV Editor
- select the editor type as `UV Editor`
- select the mesh
- go to edit mode
- select the mesh parts
  - now you will get the UV maps
- <img src="select-new-uv-or-open-uv.jpg" alt="select-new-uv-or-open-uv">

## Node Editor
<b>Note: </b> change the method to display view from rendered to solid in order to reflect the chnages of nodes
- <img src="view-method-option.jpg" alt="view-method-option">

### types of node
#### for Image texturing
- <img src="directly-put-image-on-the-mesh.jpg" alt="directly-put-image-on-the-mesh">
- nodes
  - shader 
    - glossy BSDF - for shinnyness
    - mix shader
  - color 
    - mix RGB - for creating `Multiply` effect
  - input 
    - texture coordinate 
      - to select the image maps (UV, normals)
      - VERY IMPORTANT in case the UV are missing in the normal map
  - vector 
    - mapping to arrange the texture image on the mesh
    - bump - to give height to particles on the surface
      - for bump maps

#### bump and specular maps
- <img src="specular-map-with-bumps.jpg" alt="specular-map-with-bumps">

## Add normal map
- add material and then select `image texture` 
- <img src="add-new-blender-material.jpg" alt="add-new-blender-material">
- <img src="add-normals-to-material.jpg" alt="add-normals-to-material">

## Lighting
### defualt world light
we get this when no light source are added
- <img src="default-light.jpg" alt="default-light">
- change color
- <img src="light-shadow-softness.jpg" alt="light-shadow-softness">
- light spread

### types of light
- Sun
  - only can be rotated
  - location wont change the shadow
- point 
  - projects light on object in a direction
- area light
  - can be made rectangular
  - <img src="area-light.jpg" alt="area-light"> 

### falloff
- switch to `node editor`
- <img src="area-light--node-light-falloff-constant.jpg" alt="area-light--node-light-falloff-constant"> 

#### constant
the light spread will be low or high
- <img src="area-light--node-light-falloff-constant-strengths.jpg" alt="area-light--node-light-falloff-constant-strengths"> 
- high(top) vs low (bottom)
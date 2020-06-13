# Blender 2.7

## Viewport

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

### Create
- Select the mesh
- click on New and add the name
- <img src="create-new-texture-for-mesh.jpg" alt="create-new-texture-for-mesh">

### Baking (Generating the texture Maps)

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
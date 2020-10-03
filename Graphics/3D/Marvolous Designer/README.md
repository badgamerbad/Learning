# Marvolous Designer

## import / export

### Import Mesh from Blender
- Select the Mesh
- <img src="select-the-mesh-blender.jpg" alt="select-the-mesh-blender" width="400" />
- Export the selection Only
- <img src="export-the-selection.jpg" alt="export-the-selection" width="400" />
- Import the OBJ file
- <img src="import-the-selection.jpg" alt="import-the-selection" width="400" />

### Export from MD
- <img src="export-the-selection-from-md.jpg" alt="export-the-selection-from-md" width="700" />

## in built
- <img src="cloths-selector.jpg" alt="cloths-selector" width="700" />
- the module configurator is usually on the red line marked in the above image
- <kbd>Right Click</kbd> and select `Remove Modular relationship` to remove the grey overlay

## Tools

### Select items created by the tool
- select the tool
- <kbd>CTRL</kbd> + <kbd>A</kbd>

### Common tools
#### Smooth Curve 
- for waist line

#### Pen tool (Same as photoshop)
- <img src="pen-tool.jpg" alt="pen-tool" width="400" />
- Press <kbd>CTRL</kbd> and drag to have curves

##### Have symmetric lines on other side
- <img src="symmetric-trace-lines.jpg" alt="symmetric-trace-lines" width="800" />
- then we can delete the drawn lines

## View

### X ray
- <img src="x-ray-the-cloth.jpg" alt="x-ray-the-cloth" width="400" />

### Simulation property

#### Particle
- Select the garment in the `3D pattern window`
- <img src="particle-property.jpg" alt="particle-property" width="500" />
- Reduce the particle distance for higher quality

#### Layers
- if we want one object to be placed above other
- higher layer value the outermost element it will be

## Avatar

### move the pattern over `Arrangement points`
- <img src="points-to-move-the-pattern.jpg" alt="points-to-move-the-pattern" width="500" />

## Pattern

### Add point proportionally
- hover over line
- <kbd>Right Click</kbd> and enter number in dialog

### add line to polygon
- Select the internal polygon tool
- <img src="internal-polygon-and-lines.jpg" alt="internal-polygon-and-lines" width="400" />
- to draw the line double <kbd>Left Click</kbd> on the final point

<b>Note:</b> Pen tool can be also used to create internal pattern by <kbd>Right Click</kbd> and selecting internal shape
- <img src="pen-tool-for-internal-shape.jpg" alt="pen-tool-for-internal-shape" width="400" />

### Edit Pattern
- Select the edges
- Press <kbd>SHIFT</kbd> to only stretch the selected width of edges

<b>Note: </b> clicking on the lines shows the length

### Symetric pattern
- select the shape with edit points tool
- <kbd>Right Click</kbd> and select `Symmetric Pattern`

### offset lines
- <img src="draw-offeset-lines-from-other-lines-in-a-pattern.jpg" alt="draw-offeset-lines-from-other-lines-in-a-pattern" />
- select the line number 1 and <kbd>Right Click</kbd> and select `Offset as internal line`

### buttons
### add
- <img src="button-tool.jpg" alt="button-tool" />
- item 1 is the add button in the pattern
- item 2 
  - select the placed button and copy it (<kbd>Right Click</kbd> for menu) and paste it
  - then right click where u want to paste select the number and distance
  - <img src="select-move-button.jpg" alt="select-move-button" />

### button hole
- create symmetric pattern and add button to it
- with select/ move button tool and <kbd>Right Click</kbd> on the buttons
- <img src="add-button-hole-to-symmetric-pattern.jpg" alt="add-button-hole-to-symmetric-pattern" />

#### panel
To modify button hole colors and other property
- <img src="button-hole-panel.jpg" alt="button-hole-panel" />

### fasten button
- select the tool
- select the button and select the holes

## Sewing

### Smooth the stiches 
control whether the sewing should be inward or outward
- <img src="adjust-sewing-angle-to-smooth-stiches.jpg" alt="adjust-sewing-angle-to-smooth-stiches" width="400" />
- <img src="select-the-sewing.jpg" alt="select-the-sewing" width="400" />
- <img src="adjust-sewing-angle.jpg" alt="internal-polygon-and-lines" width="600" />

### Cut and sew
- selec the garment
- make marking on it with pen tool
- trace it [refer](#pen-tool-same-as-photoshop)
- select the markings and <kbd>Right Click</kbd> and select 
- <img src="cut-n-sew.jpg" alt="cut-n-sew" width="600" />

## Garment
### make the garment hang in the air
- <img src="pin-box-to-select-point-on-garment.jpg" alt="pin-box-to-select-point-on-garment" width="400" />
- click and drag the small point on the garment
- <img src="pin-box-points-on-garment.jpg" alt="pin-box-points-on-garment" width="400" />
- Select the garment
- <img src="strenthen-the-cloth-in-air.jpg" alt="strenthen-the-cloth-in-air" width="600" />

### copy fabric from library
- drag and drop the fabric from library to fabric panel
- assign to selected patterns
- <img src="assign-fabric.jpg" alt="assign-fabric" />

### Add fabric
- Select the cloth or part of cloth
- and press assign
- <img src="create-new-properties-for-fabric.jpg" alt="create-new-properties-for-fabric" width="400" />
- set properties such as 
  - opacity - for translucence
  - type - velvet 
  - color

<b>Note:</b> drag and drop the fabric over pattern

### Create shirring (elastic property)
- <img src="image-sample-of-shirring.jpg" alt="image-sample-of-shirring" width="400" />
- <img src="adjust-the-elastic-ratio-n-strength.jpg" alt="adjust-the-elastic-ratio-n-strength" width="800" />

### rotate internal divided lines
- <img src="rotate-lines-in-garment.jpg" alt="rotate-lines-in-garment" width="400" />
- select the tool and then select the line

## Retopology
- <img src="retopology-buttons.jpg" alt="retopology-buttons" />

### Edit topology
- <img src="edit-retopology-buttons.jpg" alt="edit-retopology-buttons" />

#### multiselect
- <kbd>SHIFT</kbd> and select multiple

#### select and drag
- <img src="edit-retopology-select-and-drag.jpg" alt="edit-retopology-select-and-drag" />

#### loop selection 
- double <kbd>Left click</kbd> on the vertices or edges

#### drag box
- press <kbd>CTRL</kbd> and drag the mouse to select vertices

#### delete
- <kbd>delete</kbd>

#### merge
- select multiple vertices
- <kbd>Right click</kbd> on vertex and select `Merge`

#### sub divide menu
- <kbd>Right click</kbd> and select the `Add division`
- <img src="edit-retopology-subdivision-options.jpg" alt="edit-retopology-subdivision-options" />

#### sud divide keys
- select create topology
- hover over the topology pattern
- <kbd>SHIFT</kbd> + <kbd>CTRL</kbd>
- click to `confirm`

### Extrude
- enable edit topology
- <kbd>SHIFT</kbd> + <kbd>Left click</kbd> to select multiple edges
- <kbd>SHIFT</kbd> + <kbd>CTRL</kbd> and drag the mouse

### remesh
- to create a low poly mesh
- after the new `topology` pattern is drawn <kbd>Right click</kbd> and remesh all
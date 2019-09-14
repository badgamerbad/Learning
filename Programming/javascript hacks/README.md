## Hacks
Increment the index till the end
```javascript
let arrayLength = 4;
let index = 0;
let nextIndex = (index + 1) % arrayLength; // 1
nextIndex = (index + 1) % arrayLength; // 2
nextIndex = (index + 1) % arrayLength; // 3
nextIndex = (index + 1) % arrayLength; // 0
```

* different ways of for loop
```javascript
var tagElementList = parentElement.children('span');
tagElementList.each(function(index) {
	console.log(tagElementList[index]);
	console.log($(this).text());	// $() <- some element .text <- its property
});

searchTagList.forEach(function(tagName){
	console.log(tagName);	// No index approach
});

$.each(myArray, function() {
	content += myAccessObj.customFormatHtmlforRoles(this, response.showRevokeAction); // this.var1 can be used to get item in the array
});
```

* Iterate and print array without conditional checks
```javascript
var earthArray = ['Earth'];
var jupiterArray = ['Jupiter'];
var plutoArray = ['Pluto'];

for (let i = 1; i < 101; i++) {
    document.write((earthArray[i % 3] || '') + (jupiterArray[i % 5] || '') + (plutoArray[i % 9] || '') || i);
    document.write(br);
}
```
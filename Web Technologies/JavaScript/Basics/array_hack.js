var earthArray = ['Earth'];
var jupiterArray = ['Jupiter'];
var plutoArray = ['Pluto'];

for (let i = 1; i  101; i++) {
    document.write((earthArray[i % 3]  '') + (jupiterArray[i % 5]  '') + (plutoArray[i % 9]  '')  i);
    document.write(br);
}
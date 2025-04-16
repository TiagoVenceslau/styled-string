### Description

The difference between styled string and other string styling libraries is the builder like approach, 
minimizing boilerplate to the minimum.

### Styled String Examples

#### Basic Usage
```typescript
import { style } from 'styled-string';

const styledText = style('Hello, World!').red.bold;
console.log(styledText.toString());
```
Result: 
 - <span style="color: red; font-weight: bold;">Hello, World!</span>


#### Foreground Colors
```typescript
import { style } from 'styled-string';

console.log(style('Red text').red.toString());
console.log(style('Green text').green.toString());
console.log(style('Blue text').blue.toString());
```
Result: 
 - <span style="color: red;">Red text</span>
 - <span style="color: green;">Green text</span>
 - <span style="color: blue;">Blue text</span>


#### Background Colors
```typescript
import { style } from 'styled-string';
console.log(style('Red background').bgRed.toString());
console.log(style('Green background').bgGreen.toString());
console.log(style('Blue background').bgBlue.toString());
```
Result:
- <span style="background-color: red;">Red background</span>
- <span style="background-color: green;">Green background</span>
- <span style="background-color: blue;">Blue background</span>


#### Bright Colors
```typescript
import { style } from 'styled-string';
console.log(style('Bright red text').brightRed.toString());
console.log(style('Bright green background').bgBrightGreen.toString());
```
Result:
- <span style="color: #FF0000;">Bright red text</span>
- <span style="background-color: #00FF00;">Bright green background</span>


#### Styles
```typescript
import { style } from 'styled-string';
console.log(style('Bold text').bold.toString());
console.log(style('Italic text').italic.toString());
console.log(style('Underlined text').underline.toString());
console.log(style('Styled text').red.bold.underline.toString());
```
Result:
- <span style="font-weight: bold;">Bold text</span>
- <span style="font-style: italic;">Italic text</span>
- <span style="text-decoration: underline;">Underlined text</span>
- <span style="color: red; font-weight: bold; text-decoration: underline;">Styled text</span>


#### 256 Color
```typescript
import { style } from 'styled-string';
console.log(style('256 color text').color256(100).toString());
console.log(style('256 color background').bgColor256(200).toString());
```
Result:
- <span style="color: #878700;">256 color text</span>
- <span style="background-color: #ff00d7;">256 color background</span>


#### RGB Color
```typescript
import { style } from 'styled-string';
console.log(style('RGB text').rgb(255, 100, 0).toString());
console.log(style('RGB background').bgRgb(0, 100, 255).toString());
```
Result:
- <span style="color: rgb(255, 100, 0);">RGB text</span>
- <span style="background-color: rgb(0, 100, 255);">RGB background</span>


#### Clear Styling
```typescript
import { style } from 'styled-string';
const styledText = style('Styled text').red.bold;
console.log(styledText.clear().toString());
```
Result:
- <span>Styled text</span>


#### Raw ANSI
```typescript
import { style } from 'styled-string';
console.log(style('Custom ANSI').raw('\u001b[35m').toString());
```
Result:
- <span style="color: magenta;">Custom ANSI</span>


#### Combinations
```typescript
import { style } from 'styled-string';
// Combining multiple strings
const combinedText = style('Hello').red.toString() + ' ' + style('World').blue.toString();
console.log(combinedText);
// Multiple chaining of properties and styles
console.log(
  style('Fancy Text')
    .red
    .bold
    .underline
    .bgYellow
    .italic
    .blink
    .toString()
);
// Combining multiple styled strings with different properties
const rainbowText =
  style('R').red.bold.toString() +
  style('a').yellow.italic.toString() +
  style('i').green.underline.toString() +
  style('n').cyan.inverse.toString() +
  style('b').blue.dim.toString() +
  style('o').magenta.strikethrough.toString() +
  style('w').white.bgRed.toString();

console.log(rainbowText);
// Complex styling with 256 colors and RGB
console.log(
  style('Gradient')
    .color256(196)
    .bgColor256(233)
    .bold
    .toString() +
  style(' Text')
    .rgb(100, 150, 200)
    .bgRgb(50, 75, 100)
    .italic
    .underline
    .toString()
);
```
Result:
- <span style="color: red;">Hello</span> <span style="color: blue;">World</span>
- <span style="color: red; font-weight: bold; text-decoration: underline; background-color: yellow; font-style: italic; animation: blink 1s step-end infinite;">Fancy Text</span>
- <span style="color: red; font-weight: bold;">R</span><span style="color: yellow; font-style: italic;">a</span><span style="color: green; text-decoration: underline;">i</span><span style="color: black; background-color: cyan;">n</span><span style="color: blue; opacity: 0.5;">b</span><span style="color: magenta; text-decoration: line-through;">o</span><span style="color: white; background-color: red;">w</span>
- <span style="color: #ff0000; background-color: #121212; font-weight: bold;">Gradient</span><span style="color: rgb(100, 150, 200); background-color: rgb(50, 75, 100); font-style: italic; text-decoration: underline;"> Text</span>

By developers, [for developers](./tutorials/For%20Developers.md).




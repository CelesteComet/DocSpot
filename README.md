# DocSpot

**Please try adding a breakpoint on line 12 where it has a comment**

The breakpoint will show how the blocks will not be colored until 250ms has passed according to spec.
The breakpoint will break at 249ms so there will be no blocks colored until 250ms where one block will be colored.

The **red blocks signify the blocks that are able to change color.** No other color block is able to change color until
they are first red blocks. I did this in order to show that the blocks are not able to change their color until 2 seconds
has passed since they last changed color. Therefore, when all the blocks are some sort of color, there will be exactly 8
red blocks at any given moment.

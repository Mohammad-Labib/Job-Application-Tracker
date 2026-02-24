
<!-- 1st ans -->
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer : 
1.getElementById :
=> find the  specific id using the element .
 Speed: It  works the fastest. 
        This is a unique id element only on usable it.
        If not find the element this show the null return it.

=> getElementsByClassName:
The find  a same class name specific elements.it is a html collection (like array but it also not array) return. If a same class five element, It will show all of them as a list.

=> querySelector / querySelectorAll:
This is a mordern and all flexible method. Find the css selector use the element. 
Query selector It returns the first element that meets the condition.
querySelectorAll: This returns all elements that meet the condition as a NodeList.

<!-- 2nd ans -->
2.How do you create and insert a new element into the DOM?

Answer :
Dom create a new element show the page processing step three item.
=> Create Element.
First of all, element needs to be created in memory using document.createElement(). It cannot be show  in the browser yet.

=> Content or style add.
Create a empty element text ,Class or any other attribute is added.

=> Element insert or connection.
the created element in the HTML.need to decide where to place it. Some popular methods for this are.

=> appendChild(): Appends to the very end of the parent element.

=> ​prepend(): Appends to the beginning of the parent element.

=> before() / after(): Appends just before or after a specific element.

<!-- 3rd ans -->
3. What is Event Bubbling? And how does it work?

Answer :
The event bubbling is a javascript of a concept. 
Where any element any event like click. That event is not limited to that element only.It is like a bubble or air bubble that gradually rises from the bottom element to its parent above.

​Target Element: The event is triggered on the element that was first clicked.​Parent Element: Then it goes to the parent element immediately above it.​Grandparent Element: This continues until it reaches the window object at the top of the DOM tree.

<!-- 4th ans -->
4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event Delegation means JavaScript of a technique. Where every is a child element Without separate event listeners.they parent element an only do  event listerner add.

through do the work of event bubbling . When an event occurs on a child element.Then we can understand from the parent which child was clicked.

<!-- 5th ans -->
5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault():
Disables the default browser behavior of an element.Browsers have some default actions. For example, clicking on a link will take you to another page, or submitting a form will refresh the page. Using this method will prevent the browser from performing those default actions.

stopPropagation():
When a child element is clicked, the click event also reaches its parent element (called Event Bubbling). Using this method, the event cannot reach higher.
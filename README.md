
#1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?❓
##Answer: **getElementById: Its selects one element with the given ID.
          **getElementsByClassName: Its selects all elements with the given class names
          **querySelector / querySelectorAll: 
              querySelector: Returns the first matching element,
              querySelectorAll: Returns all matching elements.

#2.How to Create and Insert a New Element into the DOM❓
##Answer: **const newElement = document.createElement("div");
          **newElement.textContent = "This is a new Heading.";
          **const container = document.getElementById("container");
          **container.appendChild(newElement);

  #3.What is Event Bubbling and How Does It Work❓
  ##Answer: **Event Bubbling is a process where an event starts from the target element and propagates upward through its parent elements in the DOM tree.

  #4.What is Event Delegation and Why Is It Useful❓
  ##Answer: **Event Delegation is a technique where a parent element handles events on its child elements, using a single event listener.
              and its usefull for -Reduces the number of event listeners.
                                  -Supports dynamically added child elements.

  #5.Difference Between preventDefault() and stopPropagation()❓
  ##Answer: **preventDefault() = Prevents the default browser behavior.
            **stopPropagation() = Stops the event from bubbling up to parent elements.


Live link: https://mdjunaidjewel.github.io/Assignment-05-with-Js/

/* ---------------------------------------- FRAMEWORK ---------------------------------- */
function WrapperElement(element)
{
    // a wrapper element allow us to extend html dom functionality
    // without changing the behaviour of built-in elements
	
    // this contains the actual selection
    this.element = element;
    
    // this allows us to see if a selection contains one or more elements
    if(element[0] != undefined)
    {
        this.isArray = true;
    }
    else
    {
        this.isArray = false;
    }
}

WrapperElement.prototype.toggleClass = function(className)
{
    
}

WrapperElement.prototype.addClass = function(className)
{
	if(this.isArray)
	{
															// multiple elements, we'll need to loop
		for(var i = 0; i<this.element.length; i++)
		{
			this.element[i].className += " " + className;
		}
	}
	else
	{
															// just one element, so we can manipulate it without looping
		this.element.className = className;
	}
	return this; 											// return the original WrapperElement, so that we can chain multiple functions like $("li").addClass("test").toggleClass("something");
}

WrapperElement.prototype.prepend = function(item)
{

}

WrapperElement.prototype.keyup = function(action){
	if(this.isArray)
	{
		// multiple elements, we'll need to loop
		for(var i = 0; i<this.element.length; i++)
		{
			this.element[i].addEventListener('keyup', action);
		}
	}
	else
	{
		// just one element, let's go nuts
		this.element.addEventListener('keyup', action);
	}
	return this;
}

WrapperElement.prototype.click = function(action)
{
	
}

WrapperElement.prototype.val = function(value)
{
	
}

var $ = function(selector)
{
	// check if selector is an object already e.g. by passing 'this' on clicks
	if(typeof(selector) == "object")
	{
		return new WrapperElement(selector);
	}

	// get the first character to know if we want an element, id or class
	var firstCharacter = selector.charAt(0);
	var selectedItems;

	switch(firstCharacter)
	{
		case '#':
		var elementid =	selector.substr(1);
		selectedItems = document.getElementById(elementid);
		break;

		case '.':
		// complete this section
		// make sure we can select elements based on a class name
		break;
		
		default:
		// complete this section
		// make sure we can select elements based on their tag names
	}

	var newElement = new WrapperElement(selectedItems);
	return newElement;
}
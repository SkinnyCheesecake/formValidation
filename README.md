Hello, everyone! 👋

I don't know who might be reading this, but here's a little thing I built as a way to practice some JavaScript.

Of course, this form project is not intended to be taken seriously in any way, shape, or form. It doesn't have any real world applications or at least not yet. I'll explain what I did in a bit.

As I mentioned before, I've just started diving deeper into JavaScript. This isn't the first time I've used it, of course, I've worked with it before, but I've never coded anything entirely on my own until now. This is the first time I've built something completely from scratch. There are some exceptions, of course. I learned how to implement similar form validation in C, but that was because I was required to learn C before anything else. However, it's not the same validating a form in a CLI as it is validating a form for something that could actually be used in a real project.

So, I wanted to start with something simple that would give me a glimpse of how JavaScript works and how to debug. I had a lot of fun debugging, breaking the code, and then Ctrl+Z-ing my way back to what I had at the beginning.

Pretty much what the code does is select each input inside the HTML file, the name input, email, phone, etc. I assigned unique IDs to all of them because there aren't any other elements with those same IDs. Since there's only one element for each field in this project, using an ID versus a class wouldn't make much of a difference anyway.

I also decided to create the error and success alerts dynamically through JavaScript. I didn't have to do it that way, but I found it more interesting.

Here are the parts that stand out to me the most:

First, there's the formData object declared at the beginning. This object tracks everything inside it as part of the form, so the form knows which attributes to check when we try to submit. Each property starts as an empty string, which proves helpful later since our if-else statement checks whether any attributes are empty or contain content.

Next, we have inputDebugger. What this function does is verify that the information entered by the user is actually being captured in each field. If you check the HTML, you might notice that the property names inside the formData object match the IDs of each element. Why does this matter? We could declare the object with different property names than the element IDs, but then the connection wouldn't work—the HTML input has a different ID, so it wouldn't store the information correctly. Whatever we type into each input gets stored in the corresponding object property like this: formData[e.target.id] = e.target.value. That way, formData links each input value to its respective ID.

By default, everything stores as an empty string initially, and it stays that way if nothing is submitted. That leads us to the next function, where we destructure the object to extract each property and work with them individually. Now we can validate each input in the form to check whether information is missing or whether everything was submitted correctly. Based on that validation, it displays a message accordingly.

Thank you so much if you took the time to read all of this, wish y'all the best.

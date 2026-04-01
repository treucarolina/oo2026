import { BlogPost } from "../homework_06";

let blogobj:BlogPost;

//This runs before every test
//if we dont have this, next test would start with modified data
beforeEach(()=>{
    blogobj=new BlogPost();
});

//Tests an empty blog
test("Empty blog", ()=>{
    expect(blogobj.getTextContent()).toBe("");
});

//Tests if a single input works
test("Simple input", ()=>{
    blogobj.pressButton("Hello!");
    expect(blogobj.getTextContent()).toBe("Hello!");
});

//Tests if multiple inputs work
test("Multiple input", ()=>{
    blogobj.pressButton("Hello!");
    blogobj.pressButton(" This is my blog!");
    expect(blogobj.getTextContent()).toBe("Hello! This is my blog!");
});

//Tests if deleting a blog works
test("Deleting blog", ()=>{
    blogobj.pressButton("Hello!");
    blogobj.pressButton(" This is my blog!");
    blogobj.deleteButton();
    expect(blogobj.getTextContent()).toBe("");
});

//Tests if the "Write more characters!" notification works
test("Short character length", ()=>{
    expect(blogobj.charLength("Hello!")).toBe("Write more characters!");
});

//Tests if the "Too many characters!" notification works
test("Long character length", ()=>{
    expect(blogobj.charLength("Hello! This is to check if a text over 50 characters will trigger the error.")).toBe("Too many characters!");
});
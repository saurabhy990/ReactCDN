
const heading = React.createElement('h1',{}, "React CDN Project")

const para1 = React.createElement('p',{}, "React uses an HTML-in-JavaScript syntax called JSX (JavaScript and XML).")

const para2 = React.createElement('p',{}, "React uses an HTML-in-JavaScript syntax called JSX (JavaScript and XML). Familiarity with both HTML and JavaScript will help you to learn",React.createElement('a',{href:"https://react.dev/"},"ReactDev.com"), "JSX,and identify whether bugs in your application are  related to JavaScript or to the more specific domain of React")

const para3 =  React.createElement('p',{}, "JavaScript is the programming language that you use to add interactive features to your website. Some examples could be games, things that happen when buttons are pressed or data is entered in forms, dynamic styling effects, animation, and much more React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. ")

 
const div = React.createElement('div',{Class : "ParentDiv"}, [heading,para1,para2,para3])


ReactDOM.render(div , document.getElementById("root"));
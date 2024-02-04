const root=ReactDOM.createRoot(document.getElementById("root"));

console.log(root)


/* <div id="parent">
    <div id="child">
        <h1>Hello Wolrd</h1>
        <h2>Hi World</h2>
    </div>
</div> */

const parent=React.createElement("div",{id:"parent"},
            [
                React.createElement("div",{id:"child"},
                [React.createElement("h1",{id:"header3"},"Hello World..."),
                React.createElement("h2",{id:"header4"},"Hiii World...")
                            ]
                            ),
                React.createElement("div",{id:"child1"},
                [React.createElement("h1",{id:"header1"},"Hello World..."),
                React.createElement("h2",{id:"header2"},"Hiii World...")
                            ]
                            )
            ]        
                              )

console.log(parent)

root.render(parent);



// const header=React.createElement("h1",
//                             {id:"header"},
//                             "Hello World");//return react element(js object) not html element
// console.log(header)



// root.render(header);//convert react element to html element and put it to root element 

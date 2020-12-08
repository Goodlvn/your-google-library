# your-google-library

[![Generic badge](https://img.shields.io/badge/🥰-mongodb-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/😗-express-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/🥳-react-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/🤪-node-blue.svg)](https://shields.io/)

## Description

Start adding books to your virtual google [library](https://your-google-library.herokuapp.com/)! In this porject we are built a MERN stack application that lets you search books using googles book search api. You can then view the book in more detail, follow a link to where you can buy this book or save the book while you go searching for others! If you already know what a MERN stack is, feel free to skip on ahead! We are using mongodb as our data base, express to build our server, react for our front end display, and its all being made js(node).

## Table of Contents

- [Preview](#preview)

- [Project Significance](#project-significance)

- [Code Highlights](#code-highlights)

- [License](#license)

- [Contributing](#contributing)

- [Questions](#questions)

## Preview

![portfolio preview](client/public/ygl.gif)

## Project Significance

This felt like our first real MERN stack application that we were tasked with building. We had the option to include data base functionality with our React Portfolio but this assignment made it mandatory. It was a really fun build. We got really good practice with the main concepts of react, how it connects to a server and database! There was a decent amount of thought that had to go into how we would plan the project, what components we would need to keep track of through state, and how we would navigate through the website. It really felt like we were on our own on this one, not in a bad way. It felt like we were taking the first steps on our own as true developers. There were no hard references, or solved files that we could look to for help and it was pretty kick ass!

## Code Highlights

There is a ton that stood out to me in through this build but what I really wanted to highlight was the use of local storage, useEffect, and state. I came to a point where I was able to get the single book view to display when clicked and that was great! I did notice, however that whenever I refreshed the page the book information would disapear!

The way that we were passing in information to the book details component was through state:

--> start off with this is piece of state "bookDetails" as an empty obj. Whena book is clicked take all of its information and update the state.

--> now when we shift over to the component grab all of the needed for the information from said state

The thing is that the state wasn't able to persist through the refresh and I didnt want to save this new obj to the data base. So I used a bit of [googleFu](https://www.youtube.com/watch?v=fTP2gi7e3k8&feature=emb_logo) and found out that I can use Local Storage to save the current book info!!!!!!

In a quick nutshell: when we refresh the page(re-render the component) if there is information in the sate "bookDetails" then we are going to save that information inside of local storage. If not we are going to go ahead and run our useEffect which lets us grab data from local storage and update the "bookDetails" state using that info!

```
 if (bookDetails.title) {
        localStorage.setItem("book-view", JSON.stringify(bookDetails));
    }

    useEffect(() => {
        const data = localStorage.getItem("book-view");

        if (data) {
            const newData = JSON.parse(data)
            dispatch({ type: Actions.VIEW_DETAILS, payload: newData });
        }

    }, [])
```

## License

MIT

## Contributing

[Jonathan-David Lopez Martinez](http://www.jds.world/)

## Questions

If you have any questions about the repo, want to open an issue or contact me directly please reach out to focus4ursoul@gmail.com. Check out more of my work at [Goodlvn](https://github.com/Goodlvn).

<img src="https://avatars3.githubusercontent.com/u/37821521?v=4=50x50" alt="drawing" width="200"/>

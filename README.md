# New Personal Website
###### Joshua Carter
---

## Introduction
This is my new personal website. It is currently in development and will replace the one you can currently view at [joshuacarter.com.au](http://joshuacarter.com.au). You can view my current progress at [this link](http://ec2-54-153-231-13.ap-southeast-2.compute.amazonaws.com/).

I've learned a lot from making my first website and from my other projects since then, so I'm making this to better demonstrate my grasp of modern tools and practices.

On a personal note, I've opted to use my (thus far) favorite tools, which also happen to be some of the most popular. I know I need to 'pick something and stick with it' so it might as well be what I like best, and I can always pivot for the task at hand.

I feel like mentioning that I like Angular 4 and React roughly equally so the choice here is due to the job market, and to a smaller extent, because if I'm ever limited to frontend work, then I'll enjoy that more with react due to its more programatic nature.

---
## Tools Used

##### FRONTEND: [React](https://reactjs.org/) and [Redux](https://redux.js.org/introduction)
I like React and Angular2+ equally, but the job market in my area favors React heavily, so the decision to use React is an easy one. Additionally, if I'm ever limited to frontend work, I'll enjoy it more in React due to its programatic nature. And more time spent in JavaScript means building a core/portable skill.

##### STYLING: [Semantic UI ](https://react.semantic-ui.com/introduction) and [SASS](http://sass-lang.com/)
I've enjoyed using Bootstrap, but found it limiting when trying to customize a site's styling, so I'm trying Semantic UI (we'll see how it goes). I wrote **all** the css for my old website myself but I've since learned that it matters more to show use of a framework and a css compiler like SASS, so I aim to address that this time around.

##### BACKEND: [NodeJs](https://nodejs.org/en/) and [ExpressJs](https://expressjs.com/)
It's a tough call when choosing between the ubiquitous PHP and NodeJS, but I've found ExpressJs a joy to use and using JS on the back/front-end helps me focus my learning a little. My old website used PHP without a framework on the backend, but I don't think this flies when doing things 'properly' and I don't want to take on too many things at once.

##### DEPLOYMENT: [Docker](https://www.docker.com/) and Bash/SSH
I use docker to launch a custom dockerfile and bash scripts to deploy the site with a single click (local or remote).

##### HOSTING: [Amazon Web Services](https://aws.amazon.com/)
I serve the site from an EC2 instance, use Route53 for domain management, and RDS for database hosting.

##### MISC:
- [axios](https://www.axios.com/) for all http requests.
- [redux-thunk](https://github.com/gaearon/redux-thunk) for async redux dipatching.
- [redux-logger](https://github.com/evgenyrodionov/redux-logger) for tracking redux state.
- [redux-catch](https://github.com/PlatziDev/redux-catch) for handling redux errors.
- [express-cors](https://github.com/expressjs/cors) for testing local deployment.
- [express-session](https://github.com/expressjs/session) for user authentication.
- [jest](https://facebook.github.io/jest/) for frontend testing.
- [dot-env](https://github.com/motdotla/dotenv) for local/remote config.

---
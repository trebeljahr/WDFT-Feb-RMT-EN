const express = require("express");
const app = express();

const PORT = 3000;

// addFirstCustom middleware
const myMiddleWare = (req, res, next) => {
  console.log("Hello from First");
  next();
};

// add another custom middleware
const myOtherMiddleWare = (req, res, next) => {
  console.log("Hello from Second");
  next();
};

// notice how we still have to use them!
// the order here is important - this is the order that they are going to be called by the
// invocation of next()
app.use(myMiddleWare);
app.use(myOtherMiddleWare);

// add yet another one, that add's a timestamp
const addRequestTime = (req, res, next) => {
  req.requestTime = new Date();
  next();
};

// now let's add a timestamp to the request object
app.use(addRequestTime);

// let's add a middleware that logs the timestamp!
// maybe you can help me with this?
const logRequestTime = (req, res, next) => {
  console.log(req.requestTime);
  next();
};

// don't forget to use it.
app.use(logRequestTime);

// simple route
app.get("/", (req, res) => {
  // inspecting the request object to find out the requestTime property added by our
  // custom middleware and returning it in the response?
  res.send(
    "Hello World - the request reached the server at " +
      req.requestTime.toTimeString()
  );
});

// let's also add a middleware that's specific to only a SINGLE route!
const userRouteMiddleware = (req, res, next) => {
  console.log("Middleware on the User Route");
  req.user = "John Doe";
  next();
};

// let's not forget to use it...
app.use("/user", userRouteMiddleware);

// and also add the route, displaying a "custom" hello message using the req.user
// John Doe we added to the request object
app.get("/user", (req, res) => {
  res.send(`Hello ${req.user}`);
});

// let's add a secret response haha :)
const secretResponse = (req, res, next) => {
  // notice how we have access to the req.params!
  // question - where does .guess come from?
  if (req.params.guess === "bitcoin") {
    // we can also send a response from within a middleware - this way
    // the middleware "terminates" early -> this means other middlewares
    // and the route itself will not be called.
    // this concept is very important if you think about how you could secure a route,
    // so that somebody only has access to it when they have the autorization/authentication
    // needed to do so!
    res.send("Hey, you found out about the secret!");
  }
  next();
};

// register the middleware
app.use("/secret/:guess", secretResponse);
app.get("/secret/:guess", (req, res) => {
  res.send("Na, that's not the secret, better luck next time!");
});

// how could we have middleware that we can configure?
// i.e. when we use it on route a -> we want it to behave differently than on route b?
// answer is simple - let's write a factory function for it.
// a factory function is a function that returns a function
// -> this returned function will be our middleware!
const createMiddlewareWithConfig = (configuration) => {
  if (configuration === "A") {
    // return with middleware for case A
    return (req, res, next) => {
      console.log("A is what we choose");
      req.choice = "A";
      next();
    };
  } else if (configuration === "B") {
    // return with middleware for case B.
    return (req, res, next) => {
      console.log("B is what we choose");
      req.choice = "B";
      next();
    };
  }
  // return with a middleware for a "default" case!
  return (req, res, next) => {
    console.log("We didn't choose either A nor B!");
    req.choice = "neither";
    next();
  };
};

// use it! -> see how we call the createMiddlewareWithConfig
app.use(createMiddlewareWithConfig("A"));
// now if we would like to use it with the B config? what would we need to do?
// app.use(createMiddlewareWithConfig("B"));

// add a route where we actually see it... why don't we see it on "/" ?!
// because the app.get is defined earlier than this.
app.get("/with-custom-middleware", (req, res) => {
  res.send("The middleware is configured as " + req.choice);
});

// simple example:
app.get("/get-before-middleware-use", (req, res) => {
  res.send("Haha first! 😛");
});

// we see - the ORDER we call app.get and app.use is really important since that defines
// the ordering of which one is invoked first and which second and so on!
app.use("/get-before-middleware-use", (req, res, next) => {
  res.send("I never get sent 😞");
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

# Step - 0 Create the folder strucute

# Step - 1 Create the routing configuration

# Step - 2 Create Router Outlet

# Step - 3 Understand the difference between Link and NavLink

# Q - What is the diff between Link and NavLink, when do you use what?

# Step - 4 CSS for the App

# Q - For the existing Layout will you use Grid or Flex

I'd use CSS Grid for the application shell because the layout has a two-dimensional structure: a header spanning the application width, with a sidebar and main content area underneath. Grid lets me explicitly define those rows and columns. I'd use Flexbox inside individual components where the layout is primarily one-dimensional.

# Q - Why should you use Semantic tags for each of these divs

-Accessibility
-SEO - seo crawlers use Semantic tag to identify what parts of the page carry more structural importance.
-Maintainability and Readability

# Step 5 - Add a user name to header what is the state management strategy you use?

-I would use useContext as the state rarely changes beacuse every usecontext causes a rerender when value changes, I see that name would rarely change which means it would rarely call a rerender of child comp
-Use context can also be used to prevent props drilling

# Step 6 - Implementsting Auth Context

# Step 6i - Create a context

# Step 6ii - Create a provider

# Step 6iii - Create a hook

# Step 7 : Implementing UseContext for Theme and saving theme in local storage. Every side effect has to be synchronised with the application so useEffect also has to be added accordingly

Note: "useEffect is mandatory whenever localStorage is involved."

# Step 8 : Implement a protected route

# Step 9 : Implement login logout with auth Provider

# Step 10 : Use the auth Provider in login component

           - Creating the login Page to accept userName and passWord

# Step 11 : Use the auth Provider for logout

            - In logout you need not add the logout nvigation to login page, since you have implemented protected routes. It will
            automatically move to login Page

# Step 12 : Implement market.tsx

            - You shouldnt call the effect in the component
            - Markets Component -> useMarkets(inside useMarkets UseEffect will be called, this should return data,error,loading) -> Service (inside service fetch will be called)

---

# Step 1 : Created a debounce searh

---

# Step 1 : Application fetches mock data or real data based on the config in env

---

# Step 1 : Created an Mock data to mimic real time updates

---

#TODO
Global Error Handle
WEbsockets
Calling mock v/s real apis with just a flag

Moving API Key to BFF
Improving the application with structured logging

Check if timer gets removed when you move from one component to another

# Rules :

React Hook should only be called inside another react component
or a customeHook

# You should have types for your selector and dispatcher as

# well, this will help the app know the type that you are using

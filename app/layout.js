## Error Type
Runtime TypeError

## Error Message
(0 , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.useContext) is not a function


    at Navbar (components\Navbar.js:10:40)
    at resolveErrorDev (file://D:/Web Projects/Restaurant Demo/restaurant/.next/dev/static/chunks/node_modules_next_dist_compiled_react-server-dom-turbopack_0p3wegg._.js:1919:150)
    at processFullStringRow (file://D:/Web Projects/Restaurant Demo/restaurant/.next/dev/static/chunks/node_modules_next_dist_compiled_react-server-dom-turbopack_0p3wegg._.js:2434:29)
    at processFullBinaryRow (file://D:/Web Projects/Restaurant Demo/restaurant/.next/dev/static/chunks/node_modules_next_dist_compiled_react-server-dom-turbopack_0p3wegg._.js:2393:9)
    at processBinaryChunk (file://D:/Web Projects/Restaurant Demo/restaurant/.next/dev/static/chunks/node_modules_next_dist_compiled_react-server-dom-turbopack_0p3wegg._.js:2502:221)
    at progress (file://D:/Web Projects/Restaurant Demo/restaurant/.next/dev/static/chunks/node_modules_next_dist_compiled_react-server-dom-turbopack_0p3wegg._.js:2689:13)

## Code Frame
   8 | const Navbar = () => {
   9 |
> 10 |     const { toggleDrawer } = useContext(ContextProvider)
     |                                        ^
  11 |
  12 |     const navLinks = [
  13 |         { name: "Menu", href: "/menu" },

Next.js version: 16.2.1 (Turbopack)

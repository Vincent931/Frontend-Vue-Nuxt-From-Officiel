<template>
        <nav class="navtop">
          <ul class="ultop">
            <li class="litop"><RouterLink to="/">Home</RouterLink>&nbsp;</li>
            <li class="litop"><RouterLink to="/headconfigure">HeadConfigure</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/hello">Hello</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/userinput">UserInput</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/binding">Binding</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/condloop">Condition&Loop</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/formbindings">Form Bindings</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/simplecomponent">SimpleComponent</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/editor">Editor</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/fetching">Fetching</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/sortfilter">SortFilter</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/tree">Tree</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/svggraph">SVGgraph</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/modal">Modal</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/listing">Listing</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/todomvc">TodoMVC</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/counter">Counter</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/tempconvert">T° Convert</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/booker">Booker</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/timer">Timer</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/crud">CRUD</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/drawer">Drawer</RouterLink></li>&nbsp;
            <li class="litop"><RouterLink to="/ceils">Ceils</RouterLink></li>&nbsp;
          </ul>
        </nav>
</template>
<style>
.navtop{
  background-color:#805c6f;
  padding:15px;
  display:flex;
  flex-direction:row;
  margin-bottom:30px;
  width:100%;
  justify-content:center;
  color:white;
  flex-wrap:wrap;
}
.ultop{
  display:flex;
  flex-direction:row;
  height: auto;
  flex-wrap:wrap;
  background-color:#805c6f;
}
.navtop ul li a{
  color:white;
  text-decoration:none;
  width:100%;
  background-color:#805c6f;
}
.litop{
  list-style-type: disc;
  margin: 10px 18px 10px 0;
  background-color:#805c6f;
}
</style>
# My Blog - plan 
> [Antonio Radosav - GitHub - My Blog](https://github.com/RadosavAntonio/myBlog-react)

## <span style="color: red"> Pages </span> 
* Home
* Dashboard
<br/><br/>

## <span style="color: red"> Header </span>
  <span style="color: green"> The header have to be the same for all pages </span>

  Header contain:
  * background image: 
    - url(https://www.transparenttextures.com/patterns/cubes.png), linear-gradient(to right top, #cf4af3, #e73bd7, #f631bc, #fd31a2, #ff3a8b, #ff4b78, #ff5e68, #ff705c, #ff8c51, #ffaa49, #ffc848, #ffe652);
  * Logo
    - {still have to find a logo}
    - position right
    - centred
    - object-fit: contain
  * Name of the website
    - centered after logo
    -find a color to be seen properly (probably white)
    <br/><br/>

## <span style="color: red"> General details for any page </span>
  <span style="color: green"> this elements have to be on Home and Dashboard </span>

  * background image:
    - url(https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-5120x2880-1432.jpg)
    - The image have to be no repetitive
  * all elements that appear on any page have to be on a transparent backgroud with rounded corners
    - ackground-color: rgba(16, 18, 27, 80%);
    border-radius: 20px;
    - the text on elements have to be white
  * all elements have to be centered on the webpage and responsive
  <br/><br/>

## <span style="color: red"> Home </span>
  ### This is the page where the website have to open 
  <span style="color: green"> (if the user was not loged in before or if the user loged out, otherwise open on dashboard) </span>
  <br></br>
  <span style="color: green"> User database: have to be made with Firebase with Email and password </span>
  <span style="color: green"> Sing up option have to catch username, email and password</span>
  <br></br>
   <span style="color: green"> OPTIONAL: with google and facebook </span>
  * Have to have 2 buttons (Login and Sing up)
  * Login button have to have color primary from Material-ui
  * Sing up button have to have color secondary from Material-ui
  * min width of 50px
  * box container have to have minimul 200 height with 200 width
  * buttons have to be centred
  <br/><br/>

## <span style="color: red"> Dashboard </span>
  Dashboard is the place where the posts will appear. The new posts have to be on the top.
  ### <span style="color: red"> Post </span>
  A post have to contain
  * on left side of the seader have to be LogOut button
  * user image and username on the top (the user image have to be a circle, if no image put the first character from the username)
  * photo
  * caption (made fron username ":" and the username comment)
  * comments (username ":" and the comment)
  * imput field for being able to add comments and a submit button
    
## <span style="color: red"> Footer </span>
  * name of the one who created the website
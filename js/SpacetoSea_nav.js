
function topnav()

{

  console.log('h');
const topnav = document.createElement('topnav');

topnav.innerHTML = `

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100&display=swap');


/** navigation bar **/
.topnav {
    background-color: rgb(53, 58, 63);
    border-style: solid;
    border-bottom-color:#00AEEF; 
    border-bottom-width: 3px;
    display: flex;
    z-index: 5;

    font-family: 'Work Sans', sans-serif;
    letter-spacing: 2px;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    align-items: center;
    justify-content: space-around;
  }
  
  .topnav_button, .topnav_logo{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .topnav p{
    color: white;
    font-size: 25px;
    position: relative;
    }
  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    text-decoration: none;
  }
  
  .topnav a:hover,.dropdown:hover .dropbtn, .dropdown:hover .nodropbtn {
    color: #00AEEF; 
  }
  
  
  .dropdown {
    float: left;
    overflow: hidden;
  }
  
  .dropdown .dropbtn, .dropdown .nodropbtn{
    border: none;
    outline: none;
    color: white;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    padding: 0;
  }
  
  
  .dropdown-content  {
    display: none;
    position: absolute;
    background-color: rgba(128, 128, 128, 0.55);
    width:11%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
  }
  
  .dropdown-content a{
    float: none;
    color: white;
    padding: 5% 2%;
    text-decoration: none;
    display: block;
    text-align: left;
    font-size: 2vh;
  }
  
  .dropdown:hover .dropdown-content{
    display: block;
  }
  

  @media (min-width: 900px) {
    .dropdown .dropbtn, .dropdown .nodropbtn{
        font-size: 20px;
      }
  }
</style>
<div class="topnav">

 <div class="topnav_logo" style="width: 30%;">
   <div style="width: 45%">
         <img class="seaGrantLogo" src="static/images/MIT_MITSG_EqualFocus_Logo_White_large-copy.png" style="max-width: 100%">
   </div>
   <div style="width: 45%">
       <img src="static/images/exhibition_webpages/s2s.png"style="max-width: 100%" >
   </div>
   <div  style="width: 10%;">
      <img src="static/images/dino_drawing.png" style="max-width: 100%">
   </div>
 </div>

 <div class="topnav_button" style="width: 70%">   
   <div class="dropdown">
     <a  href="SpacetoSea_mainpage.html"><button class="nodropbtn">Exhibition</button></a>
   </div>
   <div class="dropdown">
     <button class="dropbtn">Gallery</button>
     <div class="dropdown-content">
       <a href="SpacetoSea_animal_gallery.html">Marine Life</a>
       <a href="SpacetoSea_plankton_gallery.html">Plankton</a>
       <a href="SpacetoSea_satellite_gallery.html">Satellite Images</a>
     </div>
   </div> 
   <div class="dropdown">
     <a href="SpacetoSea_about.html"><button class="nodropbtn" >About</button></a>
  </div>
   <div class="dropdown">
     <a href="SpacetoSea_events.html"><button class="nodropbtn">Events</button>
     </a>
  </div>
   <div class="dropdown">
     <a href="SpacetoSea_blog.html"><button class="nodropbtn" >Blog</button>
     </a>
  </div>
 </div>
</div>
`;

document.body.appendChild(topnav);


}


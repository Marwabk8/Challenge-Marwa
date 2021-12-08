 import img1 from './proj1.jpg'
 import img2 from './proj2.jpg'
 import img3 from './proj3.jpg'
 import img4 from './proj4.jpg'
 
 function Proj(){
     const pr =[{obj:"project1",url:img1},
     {obj:"project2",url:img2},{obj:"project3",url:img3},{obj:"project4",url:img4}]
     return(

     <div>
<section id="projects">
      <h2 className="text-important">Projects</h2>
      <div className="projects-container">
      
      {pr.map(el=>    <div className="project-card">
          <img src={el.url} alt="project" />
          <h3>   {el.obj} </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>    ) }
       
        
       </div>
    </section>
    

     </div>
     )
 }
 export default Proj
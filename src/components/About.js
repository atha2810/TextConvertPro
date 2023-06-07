



export default function About(props) {
       return (
    <div className='container' style={{display: 'block',marginLeft:'500px'}}>
        <h1 style={{color:props.mode==='dark'?'white':'green'}}>Welcome To Text Analyser</h1>
        <h4  style={{color:props.mode==='dark'?'white':'red'}}>Meet the developer</h4>
        <img src={props.imgSrc} style={{height:'400px', width:'400px'}} alt="developer"></img>
    </div>
  )
}

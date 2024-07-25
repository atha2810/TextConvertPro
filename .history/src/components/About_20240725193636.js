import "../"

export default function About(props) {
  return (
    <div
      className="container mx-3"
      style={{ display: "block", marginLeft: "500px" }}
    >
      <h1 style={{ color: props.mode === "dark" ? "white" : "green" }}>
        Welcome to TextConvertPro
      </h1>
      <div
        style={{
          color: props.mode === "ligh" ? "black" : "white",
        }}
      >
        <h4
          style={{
            color: "grey",
          }}
        >
          A feature-rich Text Editor utilizing <b>ReactJS</b> & Styled the Text
          Editor with <b>CSS</b> and <b>Bootstrap5</b>, ensuring a modern and
          visually appealing user interface.
        </h4>
        <br />{" "}
        <b
          style={{
            color: "grey",
          }}
        >
          Features :
        </b>
        <br />
        <ul
          style={{
            color: "darkgrey",
            textShadow: " 0 0 70px #0f0",
          }}
        >
          <li>repeat given text multiple times</li>
          <li> delete specified text</li> <li>capitalize text </li>
          <li>convert text to lowercase</li>
          <li>
            Integrated word and letter counting functionalities to analyze the
            input text effectively
          </li>
          <li>
            dynamic live preview feature, providing users with a real-time view
            of the text they write
          </li>
          <li>
            Included a time tracking feature to display the estimated time
            required to read the given text
          </li>
        </ul>
      </div>
      <h4
        style={{
          color: "#fff" /* Text color */,
          textShadow: "0 0 20px #00f",
          paddingLeft: "40px",
        }}
      >
        Meet the developer
      </h4>
      <div style={{ display: "flex" }}>
        <img
          src={props.imgSrc}
          style={{
            height: "300px",
            width: "300px",
            borderRadius: "150px 150px 150px 150px",
          }}
          alt="developer"
        ></img>
        <h4
          className="mx-5"
          style={{
            color: "#fff" /* Text color */,
            textShadow: "0 0 20px #00f",
          }}
        >
          Hey there! I'm Atharva Lakhamade, a computer whiz with a passion for
          creating awesome things. I've got a whole toolbox of technical skills,
          from Java to HTML, CSS, JavaScript and ,NextJS ,MERN(MongoDB,
          ExpressJS, ReactJS, NOdeJS) stack. I have a natural talent for
          transforming ideas into reality with a touch of uniqueness and
          practicality. Whether it's building an App or a stylish Website, I
          love solving problems and adding my creative touch. I'm a team player
          with a can-do attitude, and when I'm not coding, you'll find me lost
          in a good book, strumming the guitar, or impressing people with my
          Rubik's Cube skills. So Let's create something amazing together!
        </h4>
      </div>
    </div>
  );
}

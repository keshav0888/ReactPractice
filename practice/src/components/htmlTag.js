// import react from 'react'
import { Formik, Field, Form } from "formik";
import sample from "./sample-3s.mp3";
const HtmlTag = () => {
  const onButtonClick = (e) => {
    console.log(e);
  };
  const initialValues = {
    username: "shindekeshav",
    password: "keshav@88",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <div style={{ "border-radius": "50%" }}>
        <label for="file">Downloading progress:</label>
        <progress id="file" value="72" max="100">
          {" "}
          32%{" "}
        </progress>
      </div> */}

      {/* <a href="www.google.com" target="_self">
        Click me (target _self)
      </a>
      <a href="https://www.google.com" target="_blank" rel="noopener">
        Click me (target _Blank)
      </a>
      <a href="https://www.google.com" title="Visit Example">
        Hover over me
      </a>
      <a href="https://www.example.com/downloads/file.pdf" download>
        Download PDF
      </a>
      <a href="img.jpg" download="my%20image.jpg">
        Download Image
      </a>
      <a href="mailto:email@example.com">Send an Email</a>
      <a href="tel:+1234567890">Call Us</a>
      <a href="https://www.example.com" aria-label="Visit Example">
        Accessible Link
      </a>

      <audio controls>
        <source src={sample} />
      </audio> */}
      {/* <code>console.log(hi)</code> */}

      {/* <dialog open>This is an open dialog window</dialog> */}

      <Formik initialValues={initialValues} onSubmit={onButtonClick}>
        <Form>
          <label htmlFor="username">Username:</label>
          <Field type="text" id="username" name="username" required />
          <hr />
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" required />
          <Field component="textarea" name="text"></Field>
          <Field as="select" name="selectedCar" id="selectedCar">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </Field>
          <button type="Submit">Click Me</button>
          <div>
            <label>Gender:</label>
            <div>
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
              <label>
                <Field type="radio" name="gender" value="other" />
                Other
              </label>
            </div>
          </div> 
        </Form>
    
      </Formik>

      {/* <hr />
         */}
      {/*
      <hr />
      <ol style={{ "list-style-type": "none" }}>
        <li value="100">Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>

      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul> */}
      {/* <p>
        My family and I visited The Epcot center this summer. The weather was
        nice, and Epcot was amazing! I had a great summer together with my
        family!
      </p>
      <aside>
        <h4>Epcot Center</h4>
        <p>
          Epcot is a theme park at Walt Disney World Resort featuring exciting
          attractions, international pavilions, award-winning fireworks and
          seasonal special events.
        </p>
      </aside> */}
      {/* 
      <img
        src={img}
        alt="Workplace"
        usemap="#workmap"
        width="400"
        height="379"
      />

      <map name="workmap">
        <area
          shape="rect"
          coords="34,44,270,350"
          alt="Computer"
          href="computer.htm"
        />
        <area
          shape="rect"
          coords="290,172,333,250"
          alt="Phone"
          href="phone.htm"
        />
        <area
          shape="circle"
          coords="337,300,44"
          alt="Cup of coffee"
          href="coffee.htm"
        />
      </map> */}
    </div>
  );
};
export default HtmlTag;

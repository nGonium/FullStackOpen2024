import Part from "./Part"

const Content = (props) => {
  return <>
    {props.course.parts.map(({ name, exercises }) => 
      <Part key={name} name={name} exercises={exercises} />)}
  </>
}

export default Content
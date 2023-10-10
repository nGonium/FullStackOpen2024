const Total = (props) => {
  const total = props.course.parts
    .map(({exercises}) => exercises)
    .reduce((subtotal, exercises) => subtotal + exercises)
  
  return <p>
    <strong>
      total of {total} exercises
    </strong>
  </p>
}

export default Total
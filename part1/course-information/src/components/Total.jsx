const Total = (props) => {
  const total = props.course.parts
    .map(({exercises}) => exercises)
    .reduce((subtotal, exercises) => subtotal + exercises)
  
  return <p>
    Number of exercises {total}
  </p>
}

export default Total
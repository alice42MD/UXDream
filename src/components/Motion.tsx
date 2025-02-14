import { useMotion } from "react-use"

const Demo = () => {
  const state = useMotion()
  console.log(state)
  return <pre>{JSON.stringify(state, null, 2)}</pre>
}
export default Demo

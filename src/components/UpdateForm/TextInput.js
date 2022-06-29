import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import { forwardRef } from "react"

const TextInput = forwardRef((props, ref) => {
    return (
      <FormControl className="text-black text-lg">
        <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
        <Input className="border-black border-2 w-72 h-10 rounded-md pl-1 text-base" ref={ref} id={props.id} {...props} />
      </FormControl>
    )
  })

  export default TextInput;
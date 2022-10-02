import { ChildComponent } from "./ChildComponent"

export function ParentComponent(){
    const greetParent = (specificName) => alert("hello " + specificName)
return <ChildComponent greetHandler ={greetParent} />
} 
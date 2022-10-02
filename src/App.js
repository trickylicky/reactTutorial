import './App.css';
import { useState , useTransition} from 'react';

// import { PostForm } from './component/PostForm';
// import "./appStyles.css"
// import styles from './appStyles.module.css'
// import { InLine } from './component/InLine';
// import Greet from './component/Greet';
// import { Message } from './component/Message';
// import { ClickHandler } from './component/Clickhandler';
// import { ParentComponent } from './component/ParentComponent';
// import { UserGreeting } from './component/UserGreeting';
// import { NameList } from './component/NameList';
// import { StyleSheet } from './component/StyleSheet';
// import { Form } from './component/Form';
// import { PostList } from './component/PostList';
import NAMES from "./component/data.json";



function App() {
  const[query , setQuery] = useState("")
  const[values , setvalues] = useState('')
  const [isPending ,startTransition] = useTransition()

  function changeHandler(e){
   setvalues(e.target.value)
   startTransition(()=>setQuery(e.target.value))
  }
  const filteredNames =NAMES.filter(item => {
    return item.first_name.includes(query) || item.last_name.includes(query)

  })
  return (
   <>
   {/* <Greet firstName="Jackichan" /> */}
   {/* <Message /> */}
   {/* <ClickHandler /> */}
   {/* <ParentComponent /> */}
   {/* <UserGreeting /> */}
   {/* <NameList /> */}
   {/* <StyleSheet /> */}
   {/* <InLine />
   <h1 className='error'>Error</h1>
   <h1 className={styles.success}>Success</h1> */}
   {/* <Form/> */}
   {/* <PostList /> */}
   {/* <PostForm /> */}
   <div className='App'>
    <input type="text" value={values} onChange={changeHandler }/>
    {isPending && <p>Updating List...</p>}
      {
        filteredNames.map((item) => {
          return <p key={item.id}>{item.first_name} {item.last_name}</p>
        })
      }
   </div>

   </>
    
  );
}

export default App;

export  function ClickHandler(){
    function ClickHandler(e , count = 3){
        console.log("button clicked",count , e)
    }
    return (
        <>
        <button onClick={ClickHandler} >Click</button>
        <button onClick={(e)=> ClickHandler(e, 5)} >Click 5</button>
         </>
    )
}


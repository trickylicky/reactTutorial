export function ChildComponent ({greetHandler}){
    return (
        <>
        <button onClick={() => greetHandler("Jonathan")}>greet parent</button>
        </>
    )
}
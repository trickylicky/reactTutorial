export function NameList(){
  const names = ["kate","bruce","shantel","owino"];  
  return <div>
   {
        names.map((named) => {
        return <div>
        <p key={named}>{named}</p>
        </div>
    })}
  </div>
  }
import Notes from "./Notes";

export default function Home(props) {
  
  return (
    <div>
      <div className="container"><Notes showAlert={props.showAlert}/></div>
    </div>
  );
}

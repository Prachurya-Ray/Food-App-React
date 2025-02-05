import { useState } from "react";
const Section = ({ heading, desc, isShown, setIsVisible, setHidden }) => {
  return (
    <div className="section m-2 p-2 border-4">
      <h2 className="text-lg font-bold">{heading}</h2>
      {isShown ? (
        <button onClick={() => setHidden()}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible()}>Show</button>
      )}

      {isShown && <p className="italic">{desc}</p>}
    </div>
  );
};

const FoodieMart = () => {
  const [isShown, setIsShown] = useState(null);
  return (
    <div className="foodie-mart mt-32">
      <Section
        heading={"Section 1"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isShown={isShown==="sec1"}
        setIsVisible={()=>{setIsShown("sec1")}}
        setHidden={()=>{setIsShown(null)}}
      />
      <Section
        heading={"Section 2"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isShown={isShown==="sec2"}
        setIsVisible={()=>{setIsShown("sec2")}}
        setHidden={()=>{setIsShown(null)}}

      />
      <Section
        heading={"Section 3"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isShown={isShown==="sec3"}
        setIsVisible={()=>{setIsShown("sec3")}}
        setHidden={()=>{setIsShown(null)}}

      />
    </div>
  );
};
export default FoodieMart;

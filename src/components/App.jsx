import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    //Destructuring for object
    const { value, name } = event.target;

    //event objectini aşağıda state güncellenen yerde kullanmamlıyız
    //sebebi handler fonksiyonuna geçilen event gerçek bir event değildir
    //React ın yarattığı "synthetic event" tir.yazarsak içine
    //console da hata verir
    //prevValue e önceki state değeri geçilir
    setFullName((prevValue) => {
      console.log(prevValue);

      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  function handlerClick(event) {}

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          value={fullName.fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={fullName.lName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
        />
        <button click={handlerClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;

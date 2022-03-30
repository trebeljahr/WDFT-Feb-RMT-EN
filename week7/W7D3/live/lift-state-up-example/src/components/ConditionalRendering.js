import { useState } from "react";

export function ConditionalRendering() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    console.log("isOn?", isOn);
    setIsOn(!isOn);
  };

  const styleOfH1 = { color: isOn ? "green" : "red" };
  return (
    <>
      <h1 style={styleOfH1}>Our Toggle:</h1>
      <h2 className={isOn ? "on" : "off"}>{isOn ? "Is on!" : "Is off!"}</h2>
      {isOn ? (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat
          augue non magna mattis, id ornare metus fermentum. Nunc ac augue
          libero. Integer ut tempus eros. Sed interdum, quam dignissim accumsan
          convallis, lorem ante gravida massa, ut cursus erat nulla vitae orci.
          Quisque in bibendum nisi. Quisque condimentum purus in magna suscipit
          mattis. Integer velit elit, tincidunt id luctus sed, posuere id ex.
          Aenean velit massa, aliquam vel consectetur et, egestas at turpis.
          Donec sagittis lorem massa, eget ultrices augue lobortis et. Curabitur
          rhoncus purus et erat vestibulum ornare. Aenean justo justo, finibus
          suscipit egestas vel, ullamcorper sed dolor. Donec leo lectus,
          sagittis id metus id, dignissim elementum urna. Duis ligula nibh,
          viverra eget lacinia quis, pharetra quis arcu. Nunc non luctus leo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          eleifend nisi eget tortor commodo, eu faucibus mauris pretium. Morbi
          malesuada tristique sem, eget lacinia tortor tristique eget. Donec
          justo neque, congue laoreet dui ac, imperdiet consequat elit. Donec et
          urna id leo efficitur sollicitudin. Nullam rhoncus rutrum mattis.
          Suspendisse consectetur felis id libero elementum auctor. Duis
          tincidunt fermentum ligula, eget tincidunt tellus mattis ut. Duis
          elementum libero in nulla iaculis varius. Ut non dignissim enim, quis
          pharetra dolor. Nulla mattis volutpat mi sit amet rhoncus. Fusce
          aliquam tellus vel tortor consequat venenatis. Donec pulvinar vel
          dolor et vulputate.
        </p>
      ) : null}
      <button onClick={handleClick}>Toggle!</button>
    </>
  );
}

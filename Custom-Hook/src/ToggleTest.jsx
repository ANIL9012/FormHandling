import useToggle from "./hooks/useToggle";
function ToggleTest() {
  const [isOpen, toggleOpen] = useToggle();
  const [isTest, toggleTest] = useToggle();
  return (
    <>
      <div>
        <button onClick={toggleOpen}>Toggle</button>
        {isOpen && <p>Hello this is visible!</p>}
      </div>
      <div>
        <button onClick={toggleTest}>ToggleTest</button>
        {isTest && <p>Hello this is Anil Kumar!</p>}
      </div>
    </>
  );
}

export default ToggleTest;

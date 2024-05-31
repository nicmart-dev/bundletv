import SelectGenres from "../../components/SelectGenres/SelectGenres";
import SelectBudget from "../../components/SelectBudget/SelectBudget";
import Hero from "../../components/hero1/hero1"

function SelectOptions() {
  return (
    <>
      {/* TODO: Insert Step 1 budget component */}
      <Hero />
      <SelectBudget />
      <SelectGenres />
      {/* Add other steps components */}
    </>
  );
}

export default SelectOptions;

import SelectGenres from "../../components/SelectGenres/SelectGenres";
import SelectBudget from "../../components/SelectBudget/SelectBudget";
import SelectAccessibility from "../../components/SelectAccessibility/SelectAccessibility";
function SelectOptions() {
  return (
    <>
      {/* TODO: Insert Step 1 budget component */}
      <SelectBudget />
      <SelectGenres />
      <SelectAccessibility/>
      {/* Add other steps components */}
    </>
  );
}

export default SelectOptions;

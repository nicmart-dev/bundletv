import SelectGenres from "../../components/SelectGenres/SelectGenres";
import SelectBudget from "../../components/SelectBudget/SelectBudget";
import SelectKids from '../../components/SelectKids/SelectKids';

function SelectOptions() {
  return (
    <>
      {/* TODO: Insert Step 1 budget component */}
      <SelectBudget />
      <SelectGenres />
      <SelectKids />
      {/* Add other steps components */}
    </>
  );
}

export default SelectOptions;

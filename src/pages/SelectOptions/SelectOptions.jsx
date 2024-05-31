import SelectGenres from "../../components/SelectGenres/SelectGenres";
import SelectBudget from "../../components/SelectBudget/SelectBudget";
import SelectKids from '../../components/SelectKids/SelectKids';
import SelectChannels from "../../components/SelectChannels/SelectChannels";

function SelectOptions() {
  return (
    <>
      {/* TODO: Insert Step 1 budget component */}
      <SelectBudget />
      <SelectGenres />
      <SelectChannels />
      <SelectKids />
      {/* Add other steps components */}
    </>
  );
}

export default SelectOptions;

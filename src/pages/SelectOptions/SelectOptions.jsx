import SelectGenres from "../../components/SelectGenres/SelectGenres";
import SelectBudget from "../../components/SelectBudget/SelectBudget";
import SelectKids from '../../components/SelectKids/SelectKids';
import HDChannels from "../../components/HDChannels/HDChannels";
import SelectStreaming from '../../components/SelectStreaming/SelectStreaming';

function SelectOptions() {
  return (
    <>
      {/* TODO: Insert Step 1 budget component */}
      <SelectBudget />
      <SelectGenres />
      <HDChannels />
      <SelectStreaming />
      <SelectKids />
      
      {/* Add other steps components */}
    </>
  );
}

export default SelectOptions;

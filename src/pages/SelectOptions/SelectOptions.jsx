import SelectGenres from "../../components/SelectGenres/SelectGenres";
import SelectBudget from "../../components/SelectBudget/SelectBudget";
import Hero from "../../components/hero1/hero1"
import SelectKids from '../../components/SelectKids/SelectKids';
import HDChannels from "../../components/HDChannels/HDChannels";
import SelectChannels from "../../components/SelectChannels/SelectChannels";
import SelectAccessibility from "../../components/SelectAccessibility/SelectAccessibility";
function SelectOptions() {
  return (
    <>
      {/* TODO: Insert Step 1 budget component */}
      <Hero />
      <SelectBudget />
      <SelectGenres />
      <SelectChannels />
      <HDChannels />
      <SelectKids />
      <SelectAccessibility/>
     
      
      {/* Add other steps components */}
    </>
  );
}

export default SelectOptions;
